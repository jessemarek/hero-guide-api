const db = require("../../data/db-conn");

module.exports = {
  add,
  find,
  findBy,
  findHero,
  findById,
};

//CREATE
async function add(hero) {
  const {
    info,
    stats,
    abilities,
    fusions,
    key_items,
    academy,
    awakening,
  } = hero;

  try {
    const [id] = await db("heroes").insert(info, "id");

    await insertBaseStatsData(id, stats);
    await insertMaxStatsData(id, stats);
    await insertMedallionsData(id, stats);
    await insertAbilitiesData(id, abilities);
    await insertFusionsData(id, fusions);
    await insertKeyItemsData(id, key_items);
    await insertAcademyData(id, academy);

    const [awakeningId] = await insertAwakeningData(id, awakening);
    await insertQuest1(awakeningId, awakening.quest_1);
    await insertQuest2(awakeningId, awakening.quest_2);
    await insertQuest3(awakeningId, awakening.quest_3);
    await insertSigItemStats(awakeningId, awakening.sig_stats);
    await insertForgeBonus(awakeningId, awakening.forge_bonus);

    return findById(id);
  } catch (error) {
    throw error;
  }
}

//READ

//returns a list of all heroes with basic info needed for the hero menus
async function find() {
  try {
    const heroes = await db("heroes as h")
      .join("awakening_quests as aq", "aq.hero_id", "h.id")
      .select(
        "h.name",
        "h.position",
        "h.chest_type",
        "h.available_in",
        "aq.awakened"
      );

    const skins = await db("heroes as h")
      .join("skins as s", "s.hero_id", "h.id")
      .select("h.name");
    const haveSkins = skins.map((hero) => hero.name);

    return heroes.map((h) => {
      h.awakened ? (h.awakened = true) : (h.awakened = false);
      haveSkins.includes(h.name) ? (h.hasSkin = true) : (h.hasSkin = false);
      return h;
    });
  } catch (error) {
    throw error;
  }
}

//returns a detailed object with all relevant info needed for a specific hero's guide
function findBy(filter) {
  return Promise.all([
    getHeroInfo(filter),
    getAbilities(filter),
    getFusionItems(filter),
    getKeyItems(filter),
    getHeroTrees(filter),
    getAwakeningQuest(filter),
    getHeroSkin(filter),
  ])
    .then((data) => {
      return {
        hero_info: data[0],
        abilities: data[1],
        fusion_items: data[2],
        key_items: data[3],
        academy_trees: data[4],
        awakening: data[5],
        skin: data[6],
      };
    })
    .catch((error) => error);
}

function findHero(name) {
  return db("heroes").where(name).select("id").first();
}

function findById(id) {
  return db("heroes").where({ id }).first();
}

//UPDATE

//DELETE

//Helper functions to create a new entry for a Hero Guide
function insertBaseStatsData(id, data) {
  const base = data.base_stats;
  base.hero_id = id;

  return db("base_stat_growth").insert(base);
}

function insertMaxStatsData(id, data) {
  const max = data.max_stats;
  max.hero_id = id;

  return db("max_stat_growth").insert(max);
}

function insertMedallionsData(id, data) {
  if (data.medallions) {
    return db("hero_medallions").insert({
      hero_id: id,
      medallion_id: data.medallions,
    });
  }
}

async function insertAbilitiesData(id, data) {
  asyncForEach(data, async (ability) => {
    const abilityData = {
      name: ability.name,
      description: ability.description,
      attributes: ability.attributes,
      hero_id: id,
    };
    const [abilityId] = await db("abilities").insert(abilityData, "id");

    const statsData = ability.stats.map((stat) => ({
      ability_id: abilityId,
      stat_details: stat,
    }));

    return db("ability_stats").insert(statsData);
  });
}

function insertFusionsData(id, data) {
  asyncForEach(Object.keys(data), (key) => {
    const fusion = {
      ...data[key],
      hero_id: id,
    };

    return db(key).insert(fusion);
  });
}

function insertKeyItemsData(id, data) {
  const itemData = data.map((item) => ({ ...item, hero_id: id }));

  return db("key_items").insert(itemData);
}

function insertAcademyData(id, data) {
  const treeData = data.map((tree) => ({ hero_id: id, tree_id: tree }));

  return db("hero_trees").insert(treeData);
}

function insertAwakeningData(id, data) {
  return db("awakening_quests").insert(
    {
      hero_id: id,
      awakened: data.awakened,
      quote: data.quote,
      sig_item: data.sig_item,
    },
    "id"
  );
}

function insertQuest1(id, data) {
  const questData = {
    ...data,
    awakening_id: id,
  };
  return db("quest_1").insert(questData);
}

function insertQuest2(id, data) {
  const questData = {
    ...data,
    awakening_id: id,
  };
  return db("quest_2").insert(questData);
}

function insertQuest3(id, data) {
  const questData = {
    ...data,
    awakening_id: id,
  };
  return db("quest_3").insert(questData);
}

function insertSigItemStats(id, data) {
  const statsData = data.map((stat) => ({ ...stat, awakening_id: id }));
  return db("sig_stats").insert(statsData);
}

function insertForgeBonus(id, data) {
  const bonusData = data.map((item) => ({ ...item, awakening_id: id }));
  return db("forge_bonus").insert(bonusData);
}

//Helper functions to gather all data for a specific Hero Guide

/*********************************** HERO INFO ************************************/
async function getHeroInfo(filter) {
  try {
    const [heroInfo] = await db("heroes").where(filter);

    const [baseStats] = await db("heroes as h")
      .where(filter)
      .join("base_stat_growth as bg", "bg.hero_id", "h.id")
      .select(
        "bg.health",
        "bg.p_attack",
        "bg.m_attack",
        "bg.p_armor",
        "bg.m_armor"
      );

    const [maxStats] = await db("heroes as h")
      .where(filter)
      .join("max_stat_growth as mg", "mg.hero_id", "h.id")
      .select(
        "mg.health",
        "mg.p_attack",
        "mg.m_attack",
        "mg.p_armor",
        "mg.m_armor"
      );

    const medallions = await db("heroes as h")
      .where("h.name", filter.name)
      .join("hero_medallions as hm", "hm.hero_id", "h.id")
      .join("medallions as m", "hm.medallion_id", "m.id")
      .select("m.name");

    heroInfo.stat_growth = [baseStats, maxStats];
    heroInfo.medallions = medallions.map((m) => m.name);

    return heroInfo;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

/************************************** KEY ITEMS ***************************************/
async function getAbilities(filter) {
  try {
    const abilities = await db("heroes as h")
      .where("h.name", filter.name)
      .join("abilities as a", "a.hero_id", "h.id")
      .select("a.id", "a.name", "a.description", "a.attributes");

    abilities.forEach(async (ability) => {
      const stats = await db("abilities as a")
        .where("a.id", ability.id)
        .join("ability_stats as s", "s.ability_id", "a.id")
        .select("s.stat_details");

      //convert the stat details into an array of strings instead of an array of objects
      ability.stats = stats.map((s) => s.stat_details);

      //remove the ability id since we don't need it anymore
      delete ability.id;
    });

    return abilities;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

/*********************************** FUSION ITEMS ************************************/
async function getFusionItems(filter) {
  try {
    const purple = Object.values(await getFusionColor("purple", filter));
    const purple1 = Object.values(await getFusionColor("purple_1", filter));
    const purple2 = Object.values(await getFusionColor("purple_2", filter));
    const purple3 = Object.values(await getFusionColor("purple_3", filter));
    const purple4 = Object.values(await getFusionColor("purple_4", filter));
    const orange = Object.values(await getFusionColor("orange", filter));
    const orange1 = Object.values(await getFusionColor("orange_1", filter));
    const orange2 = Object.values(await getFusionColor("orange_2", filter));

    return {
      purple,
      purple1,
      purple2,
      purple3,
      purple4,
      orange,
      orange1,
      orange2,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function getFusionColor(fusion, filter) {
  return db("heroes as h")
    .where(filter)
    .join(`${fusion} as f`, "f.hero_id", "h.id")
    .select(
      "f.slot_1",
      "f.slot_2",
      "f.slot_3",
      "f.slot_4",
      "f.slot_5",
      "f.slot_6"
    )
    .first();
}

/************************************** KEY ITEMS ***************************************/
function getKeyItems(filter) {
  return db("heroes as h")
    .where(filter)
    .join("key_items as ki", "ki.hero_id", "h.id")
    .select("ki.item", "ki.quantity");
}

/************************************ ACADEMY TREES *************************************/
async function getHeroTrees(filter) {
  try {
    const trees = await db("heroes as h")
      .where(filter)
      .join("hero_trees as ht", "ht.hero_id", "h.id")
      .join("academy_trees as at", "at.id", "ht.tree_id")
      .select("at.tree_name");

    return trees.map((tree) => tree["tree_name"]);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

/*********************************** AWAKENING QUEST ************************************/
async function getAwakeningQuest(filter) {
  try {
    const [awakening] = await db("heroes as h")
      .where(filter)
      .join("awakening_quests as aq", "aq.hero_id", "h.id")
      .select("aq.awakened", "aq.quote", "aq.sig_item");

    const [quest1] = await db("heroes as h")
      .where(filter)
      .join("awakening_quests as aq", "aq.hero_id", "h.id")
      .join("quest_1 as q1", "q1.awakening_id", "aq.id")
      .select("chapter", "fragment");

    const [recipe] = await db("heroes as h")
      .where(filter)
      .join("awakening_quests as aq", "aq.hero_id", "h.id")
      .join("quest_1 as q1", "q1.awakening_id", "aq.id")
      .select("item_1", "item_2", "item_3");

    quest1.recipe = Object.values(recipe);

    const [quest2] = await db("heroes as h")
      .where(filter)
      .join("awakening_quests as aq", "aq.hero_id", "h.id")
      .join("quest_2 as q2", "q2.awakening_id", "aq.id")
      .select("trial_name", "trial_icon", "completions");

    const [quest3] = await db("heroes as h")
      .where(filter)
      .join("awakening_quests as aq", "aq.hero_id", "h.id")
      .join("quest_3 as q3", "q3.awakening_id", "aq.id")
      .select("chapter", "requirement");

    const stats = await db("heroes as h")
      .where(filter)
      .join("awakening_quests as aq", "aq.hero_id", "h.id")
      .join("sig_stats as ss", "ss.awakening_id", "aq.id")
      .select("stat", "value", "enchant");

    const forge = await db("heroes as h")
      .where(filter)
      .join("awakening_quests as aq", "aq.hero_id", "h.id")
      .join("forge_bonus as fb", "fb.awakening_id", "aq.id")
      .select("stat", "bonus", "value");

    awakening.awakened
      ? (awakening.awakened = true)
      : (awakening.awakened = false);
    awakening.quest_1 = quest1;
    awakening.quest_2 = quest2;
    awakening.quest_3 = quest3;
    awakening.sig_stats = stats;
    awakening.forge_bonus = forge;

    return awakening;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

async function getHeroSkin(filter) {
  const skin = await db("heroes as h")
    .where(filter)
    .join("skins as s", "s.hero_id", "h.id")
    .select("s.skin_name", "s.ability", "s.details")
    .first();

  return skin ? skin : "none";
}
