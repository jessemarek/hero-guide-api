exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("heroes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("heroes").insert([
        {
          name: "elric",
          title: "elven knight",
          quote: "Victory lies ahead!",
          position: "front",
          role: "Tank",
          description:
            "Large amount of Health, can use a variety of sword-based skills to inflict major Physical Damage on the enemy",
          first_appeared: "original-hero",
          card_type: 2,
          chest_type: "gold",
          available_in: "campaign",
        },
        {
          name: "tareth",
          title: "dragon slayer",
          quote: "You're lucky I'm on your side... trust me!",
          position: "front",
          role: "DPS",
          description:
            "Besides dealing damage, Tareth's abilities can increase her Physical Attack rating and can protect teammates",
          first_appeared: "purchase-hero",
          card_type: 3,
          chest_type: "diamond",
          available_in: "hall-of-legends",
        },
        {
          name: "jasper",
          title: "fantastic feline",
          quote: "Great! Now time for a nap.",
          position: "mid",
          role: "DPS",
          description:
            "Puts a curse on enemies that causes them to take Damage when they are close to other units with the same mark",
          first_appeared: "monthly-hero",
          card_type: 2,
          chest_type: "gold",
          available_in: "arena",
        },
        {
          name: "serafine",
          title: "protector of the light",
          quote: "Protect the weak, and deliver justice!",
          position: "mid",
          role: "DPS",
          description:
            "Uses a variety of Magic Abilites dealing AoE or Single-Target Damage, with some abilities also having Slowing, Silencing or Armor-Reducing effects",
          first_appeared: "conjuring-stone",
          card_type: 3,
          chest_type: "diamond",
          available_in: "epic-arena",
        },
        {
          name: "slim",
          title: "outlaw marksman",
          quote: "Let's go raise some hell!!",
          position: "back",
          role: "DPS",
          description:
            "Possesses powerful Single-Target Physical Attacks. Excels at eliminating enemies one-by-one by landing devastating Critical Hits",
          first_appeared: "conjuring-stone",
          card_type: 3,
          chest_type: "diamond",
          available_in: "guild-hall",
        },
        {
          name: "gizmo",
          title: "genius mechaneer",
          quote: "I may be small, but I'm packing BIG guns!",
          position: "back",
          role: "DPS",
          description:
            "Uses lasers and missiles to bombard the enemy and deal Magic Damage. Excels at Single-Target Attacks",
          first_appeared: "purchase-hero",
          card_type: 3,
          chest_type: "diamond",
          available_in: "hall-of-legends",
        },
      ]);
    });
};
