
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('credits').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('credits').insert([
        {
          member_key: 'moon_moon',
          member_name: 'Moon Moon',
          avatar: '/assets/images/hero-cards-skins/kong-monkey-emperor.jpg',
          guild: 'Ouroboros'
        },
        {
          member_key: 'agentz',
          member_name: 'AgentZ',
          avatar: '/assets/images/hero-cards-aw/vulko-aw.jpg',
          guild: 'Legendary'
        },
        {
          member_key: 'modblot',
          member_name: 'Modblot',
          avatar: '/assets/images/hero-cards-aw/solomon-aw.jpg',
          guild: 'HELLDIVERS'
        },
        {
          member_key: 'theSentinel',
          member_name: 'TheSentinel',
          avatar: '/assets/images/hero-cards-skins/magnus-arctic-warfare.jpg',
          guild: 'HELLDIVERS'
        },
        {
          member_key: 'floppybeef',
          member_name: 'floppybeef',
          avatar: '/assets/images/hero-cards-aw/dr-zeno-aw.jpg',
          guild: 'Ascension'
        },
        {
          member_key: 'mitseas',
          member_name: 'Mitseas',
          avatar: '/assets/images/hero-cards-aw/orkon-aw.jpg',
          guild: 'Tsunami II'
        },
        {
          member_key: 'moony2004',
          member_name: 'Moony2004',
          avatar: '/assets/images/hero-cards-skins/lucius-cyborg.jpg',
          guild: 'Ascension'
        },
        {
          member_key: 'noomy',
          member_name: 'Noomy',
          avatar: '/assets/images/hero-cards-skins/sylphi-song-of-the-dead.jpg',
          guild: 'New Hope'
        },
        {
          member_key: 'arclight',
          member_name: 'Arclight',
          avatar: '/assets/images/hero-cards-skins/ethera-galactic-explorer.jpg',
          guild: 'Allstars'
        },
        {
          member_key: 'urion',
          member_name: 'Urion',
          avatar: '/assets/images/hero-cards/leah.jpg',
          guild: 'The Syndicate'
        },
        {
          member_key: 'salad',
          member_name: 'Salad ♥',
          avatar: '/assets/images/hero-cards/shirley.jpg',
          guild: 'New Hope'
        },
        {
          member_key: 'repa',
          member_name: 'Repa',
          avatar: '/assets/images/hero-cards-aw/dalton-aw.jpg',
          guild: 'Bloody Souls'
        },
        {
          member_key: 'baldie',
          member_name: 'The Baldie',
          avatar: '/assets/images/hero-cards-aw/sagar-aw.jpg',
          guild: 'Legion Maldita'
        },
        {
          member_key: 'hel_chek',
          member_name: 'Hel_Chek',
          avatar: '/assets/images/hero-cards/alice.jpg',
          guild: 'Night Foxes'
        },
        {
          member_key: 'nzZoo',
          member_name: 'NZZoo',
          avatar: '/assets/images/hero-cards/tsuki.jpg',
          guild: 'Ravenous Horde'
        },
        {
          member_key: 'tax',
          member_name: 'Tax',
          avatar: '/assets/images/hero-cards-aw/enrique-aw.jpg',
          guild: 'Medicore'
        },
        {
          member_key: 'dibbler',
          member_name: 'Dibbl3r',
          avatar: '/assets/images/hero-cards-aw/killjoy-aw.jpg',
          guild: 'Snipers Inc.'
        },
        {
          member_key: 'potatoes',
          member_name: 'Potatoes',
          avatar: '/assets/images/hero-cards-aw/prince-of-persia-aw.jpg',
          guild: 'Snipers Inc.'
        },
        {
          member_key: 'einherjar',
          member_name: 'Einherjar',
          avatar: '/assets/images/hero-cards-aw/goram-aw.jpg',
          guild: 'Snipers Inc.'
        },
        {
          member_key: 'dremorz',
          member_name: 'Dremorz',
          avatar: '/assets/images/hero-cards-aw/konrad-aw.jpg',
          guild: 'High Life'
        },
        {
          member_key: 'swagger',
          member_name: 'Swagger',
          avatar: '/assets/images/hero-cards/slim.jpg',
          guild: 'HELLDIVERS'
        },
        {
          member_key: 'sweatpea',
          member_name: 'Sweet Pea',
          avatar: '/assets/images/hero-cards-aw/cara-aw.jpg',
          guild: 'Seoul Seekers'
        },
        {
          member_key: 'jmg',
          member_name: 'JMG',
          avatar: '/assets/images/hero-cards-aw/serafine-aw.jpg',
          guild: 'Royal Alliance'
        },
        {
          member_key: 'ttt',
          member_name: 'TTT',
          avatar: '/assets/images/hero-cards-aw/malrath-aw.jpg',
          guild: 'Snipers Inc.'
        },
        {
          member_key: 'tragic',
          member_name: 'Tragic',
          avatar: '/assets/images/hero-cards/jasmine.jpg',
          guild: 'Snipers Inc.'
        },
        {
          member_key: 'mhden',
          member_name: 'MHDEN',
          avatar: '/assets/images/hero-cards-aw/tholin-aw.jpg',
          guild: 'Snipers Inc.'
        },
        {
          member_key: 'sk_drogon',
          member_name: 'SK Drogon',
          avatar: '/assets/images/hero-cards-aw/garrick-aw.jpg',
          guild: 'SevenKingdoms'
        },
        {
          member_key: 'sk_oberyn',
          member_name: 'SK Oberyn',
          avatar: '/assets/images/hero-cards-aw/tut-aw.jpg',
          guild: 'SevenKingdoms'
        },
        {
          member_key: 'sk_tyrion',
          member_name: 'SK Tyrion',
          avatar: '/assets/images/hero-cards-aw/ezio-aw.jpg',
          guild: 'SevenKingdoms'
        },
        {
          member_key: 'sk_stark',
          member_name: 'SK Stark',
          avatar: '/assets/images/hero-cards-aw/octo-aw.jpg',
          guild: 'SevenKingdoms'
        },
        {
          member_key: 'slasher',
          member_name: 'Slasher',
          avatar: '/assets/images/hero-cards-aw/lars-aw.jpg',
          guild: 'Soul Vampires'
        },
        {
          member_key: 'henry',
          member_name: 'Heng Li',
          avatar: '/assets/images/hero-cards/gizmo.jpg',
          guild: 'Lilith Games'
        }
      ]);
    });
};
