exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("abilities")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("abilities").insert([
        {
          name: "Dragon Strike",
          description:
            "Unleash a dragon spirit that knocks back enemies in its path and deal massive Physical Damage",
          attributes: "none",
          hero_id: 1,
        },
        {
          name: "Uppercut",
          description:
            "Cleave a nearby enemy, dealing Physical Damage as well as Lifting and Stunning them",
          attributes: "none",
          hero_id: 1,
        },
        {
          name: "Parry",
          description:
            "Whenever Elric takes Damage, if he is not currently using an ability, he will Parry the attack, reducing the amount of Damage he takes. He will then immediately counterattack",
          attributes: "none",
          hero_id: 1,
        },
        {
          name: "Knight's Oath",
          description: "Take an oath of loyalty and increase Health",
          attributes: "none",
          hero_id: 1,
        },
        {
          name: "Engraved Blade",
          description:
            "A runic incription appears on Elric's sword in one of three colors, bringing and additional effect to all of his abilities. Green grants additional Damage based on the enemy's Max Health, Red grants a Lifesteal effect and Yellow reduces enemy Energy",
          attributes: "none",
          hero_id: 1,
        },
        {
          name: "Fearless Charge",
          description:
            "Tareth knocks an enemy into the air, then pummels them with a series of Physical Attacks. If the enemy dies during the course of her Ultimate, Tareth gets a large boost in Physical Attack",
          attributes: "none",
          hero_id: 2,
        },
        {
          name: "Arrowstorm",
          description:
            "Tareth unleashes a hail of flaming arrows, dealing AoE Physical Damage. The more enemies are struck by arrows, the more Tareth's allies receive a boost to Attack Speed and Movement Speed",
          attributes: "fire",
          hero_id: 2,
        },
        {
          name: "Knight's Protection",
          description:
            "Tareth increases the Lifesteal rating of a teammate or herself, as well as restoring some of their Health",
          attributes: "none",
          hero_id: 2,
        },
        {
          name: "Divine Courage",
          description:
            "Tareth's teammates are encouraged by her fearlessness and gain an increase in Physical Armor",
          attributes: "none",
          hero_id: 2,
        },
        {
          name: "Arcane Whirlwind",
          description:
            "Jasper summons a variety of small items that rapidly revolve around the enemy party, dealing Magic Damage to all enemies. In addition, when enemies are hit by an item, they will be marked based on the type of item that hit them. When two enemies with the same mark get close to each other, the marks will disappear and they will both take Magic Damage plus an additional effect based on the type of mark. If marked with a bell, they will lose Energy. If marked with a fishbone, they will take Damage. If marked with a riceball, they will be Stunned. Jasper's Basic Attack may also randomly mark an enemy. Jasper will never be affected if a mark is placed upon him",
          attributes: "none",
          hero_id: 3,
        },
        {
          name: "Precision Pounce",
          description:
            "Jasper flies above an enemy unit, then pounces and scratches them, dealing Magic Damage. This attack will also randomly mark the enemy",
          attributes: "none",
          hero_id: 3,
        },
        {
          name: "Phantom Claw",
          description:
            "Jasper summons a giant cat claw which grasps an enemy, then throws them to a different location on the battlefield. This attack also randomly marks the enemy",
          attributes: "none",
          hero_id: 3,
        },
        {
          name: "Rapid Escape",
          description:
            "Jasper increases his Dodge Rating, as well as escaping to the protection of his own party whenever he takes Damage equivalent to 10% of his Health or is hit 5 times",
          attributes: "none",
          hero_id: 3,
        },
        {
          name: "Righteous Wrath",
          description:
            "Plasma rains down from the sky delivering intense AoE Magic Damage to one or more enemies",
          attributes: "none",
          hero_id: 4,
        },
        {
          name: "Blazing Javelins",
          description:
            "Summon 4 glowing spears which hurl themselves at the enemy dealing Magic Damage to any in their path",
          attributes: "none",
          hero_id: 4,
        },
        {
          name: "Luminous Blast",
          description:
            "Generate a blast of light which is guaranteed to Slow enemies within range as well as well as dealing Magic Damage",
          attributes: "none",
          hero_id: 4,
        },
        {
          name: "Radiant Rune",
          description:
            "Serafine draws an ancient rune with her wand, casting a spell which Silences a single enemy and greatly reduces their Magic Armor for 4 seconds",
          attributes: "none",
          hero_id: 4,
        },
        {
          name: "Shimmering Glow",
          description:
            "Every time Serafine deals Damage, her Magic Attack will be increased. It can be increased up to 50 times per wave",
          attributes: "none",
          hero_id: 4,
        },
        {
          name: "Magnum",
          description:
            "Fire a large caliber round, deal severe Physical Damage to the weakest enemy and Interrupt enemy attacks",
          attributes: "none",
          hero_id: 5,
        },
        {
          name: "Dual Threat",
          description:
            "Unload on an enemy with two weapons, dealing multiple Physical Damage attacks in rapid succession",
          attributes: "none",
          hero_id: 5,
        },
        {
          name: "Flaming Bolt",
          description:
            "Fire a flaming bolt from your crossbow, dealing AoE Physical Damage",
          attributes: "none",
          hero_id: 5,
        },
        {
          name: "Eagle Eye",
          description:
            "Slim's excellent eyesight increases his Physical Crit Rating, making him even more deadly behind the barrel or bow",
          attributes: "none",
          hero_id: 5,
        },
        {
          name: "Armor-Piercing Rounds",
          description:
            "Slim replaces his normal bullets with Armor-Piercing Rounds, which deal additional Damage that is unaffected by Armor. The more Energy the target has, the more additional Damage is dealt",
          attributes: "none",
          hero_id: 5,
        },
        {
          name: "Shock and Awe",
          description:
            "Open fire with twin machine guns and deal Magic Damage to an enemy. Will also launch missiles if the Homing Missile ability is unlocked",
          attributes: "fire",
          hero_id: 6,
        },
        {
          name: "Laser Blast",
          description:
            "Shoot a powerful laser beam, inflict enormous Magic Damage on a single target",
          attributes: "lightning",
          hero_id: 6,
        },
        {
          name: "Quad-Strike",
          description:
            "Use a Multi-barrel Launcher to shoot four guided missiles and deal Magic Damage to an enemy",
          attributes: "none",
          hero_id: 6,
        },
        {
          name: "Homing Missile",
          description:
            "Launch a pair of homing missiles. Each missile will deal Magic Damage to a random enemy and Stun them",
          attributes: "none",
          hero_id: 6,
        },
      ]);
    });
};
