//Test data for hero guide
module.exports = {
    name: 'tareth',
    title: 'dragon slayer',
    awakened: false,
    quote: 'You\'re lucky I\'m on your side... trust me!',
    position: 'front',
    role: 'Front Line Tank',
    description: 'Besides dealing damage, Tareth\'s abilities can increase her Physical Attack rating and can protect teammates',
    first_appeared: 'purchase-hero',
    card_type: 3,
    chest_type: 'diamond',
    available_in: 'hall-of-legends',
    stat_growth: [
        {
            health: 82,
            p_attack: 6.3,
            m_attack: 0,
            p_armor: 2.5,
            m_armor: 2
        },
        {
            health: 147,
            p_attack: 11.4,
            m_attack: 0,
            p_armor: 4.5,
            m_armor: 3.6
        }
    ],
    medallions: [],
    abilities: [
        {
            name: 'Fearless Charge',
            description: 'Tareth knocks an enemy into the air, then pummels them with a series of Physical Attacks. If the enemy dies during the course of her Ultimate, Tareth gets a large boost in Physical Attack',
            stats: [
                '(+ 15 Damage and + 20 Physical Attack per Ability Point)',
                'Level 100: Deals a base of 1500 Damage',
                'Physical Attack increases by 2000 when enemy is killed by Ultimate'
            ]
        },
        {
            name: 'Arrowstorm',
            description: 'Tareth unleashes a hail of flaming arrows, dealing AoE Physical Damage. The more enemies are struck by arrows, the more Tareth\'s allies receive a boost to Attack Speed and Movement Speed',
            stats: [
                '(+ 10 Damage and + 0.06% Movement and Attack Speed per Ability Point)',
                'Level 100: Deals a base of 1000 Damage',
                'Every enemy struck increases Movement and Attack Speed by 6%'
            ]
        },
        {
            name: 'Knight\'s Protection',
            description: 'Tareth increases the Lifesteal rating of a teammate or herself, as well as restoring some of their Health',
            stats: [
                '(Base 103 + 5 Health and Base 61 + 3 Lifesteal per Ability Point)',
                'Level 80: Restores 503 Health per second for 8 seconds',
                'Lifesteal rating increased by 301'
            ]
        },
        {
            name: 'Divine Courage',
            description: 'Tareth\'s teammates are encouraged by her fearlessness and gain an increase in Physical Armor',
            stats: [
                '(Base 80 + 2 Physical Armor per Ability Point)',
                'Level 60: Aura: All allies\' Physical Armor increased by 200'
            ]
        }
    ],
    fusion_items: {
        purple: [
            'clasp-of-life',
            'carnage-mallet',
            'heavy-club',
            'rotating-hacksaw',
            'banshee-essence',
            'charger-boots'
        ],
        purple1: [
            'ice-smasher',
            'grim-slasher',
            'destruction',
            'tribal-battleaxe',
            'ancient-royal-sword',
            'golden-mallet'
        ],
        purple2: [
            'conqueror\'s-chestplate',
            'doomsday-blade',
            'cap-of-souls',
            'runic-crystal-ball',
            'ice-smasher',
            'sapphire-bracelet'
        ],
        purple3: [
            'goblin\'s-scimitar',
            'healing-stone',
            'azrael\'s-roar',
            'eye-of-death',
            'doomsday-blade',
            'destruction'
        ],
        purple4: [
            'gaia\'s-cutlass',
            'zealot-battleplate',
            'demonic-visage',
            'dark-wizard\'s-figurine',
            'whisperwind-bow',
            'light-battleaxe'
        ],
        orange: [
            'unknown',
            'armor-of-shadows',
            'mystic-dragonscale',
            'titanic-axe',
            'demon\'s-skull',
            'maiden\'s-trinket'
        ],
        orange1: [
            'unknown',
            'renegade\'s-armor',
            'beastly-guardian',
            'commander\'s-blade',
            'underworld-saber',
            'blade-of-cataclysm'
        ],
        orange2: [
            'unknown',
            'hurricane-blade',
            'widowmaker',
            'blade-of-illusion',
            'shadow-slayer',
            'atlantean-battleaxe'
        ]
    },
    key_items: [
        {
            item: 'commander\'s-blade',
            quantity: 5
        },
        {
            item: 'bandit\'s-dagger',
            quantity: 4
        },
        {
            item: 'blade-of-illusion',
            quantity: 3
        },
        {
            item: 'kretonian-talisman',
            quantity: 1
        },
        {
            item: 'staff-of-illumination',
            quantity: 1
        },
        {
            item: 'jupiter\'s-hammer',
            quantity: 1
        },
        {
            item: 'titanic-axe',
            quantity: 2
        },
        {
            item: 'ironbark-warbow',
            quantity: 2
        },
        {
            item: 'nemean-hide',
            quantity: 1
        },
        {
            item: 'mystic-dragonscale',
            quantity: 1
        },
        {
            item: 'ethereal-cloak',
            quantity: 1
        },
        {
            item: 'blade-of-chaos',
            quantity: 1
        },
        {
            item: 'healing-stone',
            quantity: 3
        },
        {
            item: 'destruction',
            quantity: 3
        },
        {
            item: 'grim-slasher',
            quantity: 3
        },
        {
            item: 'spartan-dagger',
            quantity: 2
        },
        {
            item: 'sapphire-bracelet',
            quantity: 2
        },
        {
            item: 'scepter-of-the-abyss',
            quantity: 1
        }
    ],
    academy_trees: [
        'tactics',
        'honor'
    ],
    awakening: "none"
}