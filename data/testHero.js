//Test data for hero guide
module.exports = {
    name: 'elric',
    title: 'elven knight',
    awakened: true,
    quote: 'Victory lies ahead!',
    position: 'front',
    role: 'Front Line Tank',
    description: 'Large amount of Health, can use a variety of sword-based skills to inflict major Physical Damage on the enemy',
    first_appeared: 'original-hero',
    card_type: 2,
    chest_type: 'gold',
    available_in: 'campaign',
    stat_growth: [
        {
            health: 73,
            p_attack: 3.7,
            m_attack: 0,
            p_armor: 1.9,
            m_armor: 1.9
        },
        {
            health: 165,
            p_attack: 8.4,
            m_attack: 0,
            p_armor: 4.2,
            m_armor: 4.2
        }
    ],
    medallions: [],
    abilities: [
        {
            name: 'Dragon Strike',
            description: 'Unleash a dragon spirit that knocks back enemies in its path and deal massive Physical Damage',
            stats: [
                '(+ 10 Damage per Ability Point)',
                'Level 100: Deals a base of 1030 Damage',
                'Knock-back Success Rate increases with ability level enemies under level 100 will be knocked back every time'
            ]
        },
        {
            name: 'Uppercut',
            description: 'Cleave a nearby enemy, dealing Physical Damage as well as Lifting and Stunning them',
            stats: [
                '(+ 16 Damage per Ability Point)',
                'Level 100: Deals a base of 1600 Damage',
                'Lift Success Rate increases with ability level enemies below level 100 will be Lifted every time'
            ]
        },
        {
            name: 'Parry',
            description: 'Whenever Elric takes Damage, if he is not currently using an ability, he will Parry the attack, reducing the amount of Damage he takes. He will then immediately counterattack',
            stats: [
                '(Base 280 + 14 Damage per Ability Point)',
                'Level 80: Deals a base of 1400 Damage'
            ]
        },
        {
            name: 'Knight\'s Oath',
            description: 'Take an oath of loyalty and increase Health',
            stats: [
                '(Base 2000 + 50 Health per Ability Point)',
                'Level 60: Passive: Increase Health by 5000'
            ]
        },
        {
            name: 'Engraved Blade',
            description: 'A runic incription appears on Elric\'s sword in one of three colors, bringing and additional effect to all of his abilities. Green grants additional Damage based on the enemy\'s Max Health, Red grants a Lifesteal effect and Yellow reduces enemy Energy',
            stats: [
                '(Green: Base 12.3% + 0.3% and 3660 + 60 Damage per Ability Point)',
                '(Red: Base 305 + 5 Lifesteal per Ability Point)',
                '(Yellow: Base 152.5 + 2.5 Energy per Ability Point)',
                'Level 40: Green: Increases Damage by 30% of target\'s Max Health',
                'Deals a max of 6000 Damage',
                'Red: Increases Lifesteal by 500',
                'Yellow: Reduces target\'s Energy by 250'
            ]
        }
    ],
    fusion_items: {
        purple: [
            'tribal-battleaxe',
            'stealth-cape',
            'clasp-of-life',
            'golden-mallet',
            'luna\'s-boots',
            'emerald-cuirass'
        ],
        purple1: [
            'ice-smasher',
            'destruction',
            'tribal-battleaxe',
            'heavy-club',
            'carnage-mallet',
            'banshee-essence'
        ],
        purple2: [
            'goblet-of-the-ancients',
            'doomsday-blade',
            'heavenly-amulet',
            'elvish-etude',
            'guardian-plate',
            'clasp-of-life'
        ],
        purple3: [
            'spartan-dagger',
            'goblin\'s-scimitar',
            'healing-stone',
            'pride\'s-protector',
            'adamantite-scimitar',
            'runic-crystal-ball'
        ],
        purple4: [
            'zealot-battleplate',
            'cosmic-shield',
            'demonic-visage',
            'azrael\'s-roar',
            'whisperwind-bow',
            'cap-of-souls'
        ],
        orange: [
            'unknown',
            'aegis',
            'nemean-hide',
            'titanic-axe',
            'demon\'s-skull',
            'cap-of-souls'
        ],
        orange1: [
            'unknown',
            'renegade\'s-armor',
            'atlantean-battleaxe',
            'commander\'s-blade',
            'armor-of-shadows',
            'mystic-dragonscale'
        ],
        orange2: [
            'unknown',
            'master\'s-cap',
            'sphere-of-the-sands',
            'stormrider-armor',
            'shadow-slayer',
            'beastly-guardian'
        ]
    },
    key_items: [
        {
            item: 'commander\'s-blade',
            quantity: 5
        },
        {
            item: 'stormrider-armor',
            quantity: 2
        },
        {
            item: 'kretonian-talisman',
            quantity: 2
        },
        {
            item: 'bandit\'s-dagger',
            quantity: 2
        },
        {
            item: 'staff-of-illumination',
            quantity: 2
        },
        {
            item: 'primordial-stone',
            quantity: 1
        },
        {
            item: 'champion\'s-cloak',
            quantity: 1
        },
        {
            item: 'titanic-axe',
            quantity: 3
        },
        {
            item: 'nemean-hide',
            quantity: 2
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
            item: 'ironbark-warbow',
            quantity: 1
        },
        {
            item: 'blade-of-chaos',
            quantity: 1
        },
        {
            item: 'clasp-of-life',
            quantity: 5
        },
        {
            item: 'healing-stone',
            quantity: 4
        },
        {
            item: 'stealth-cape',
            quantity: 4
        },
        {
            item: 'destruction',
            quantity: 2
        },
        {
            item: 'spartan-dagger',
            quantity: 1
        }
    ],
    academy_trees: [
        'defense',
        'fearlessness'
    ],
    awakening: {
        quote: 'My blade never betrays me!',
        quest1: {
            chapter: 'Chapter 13 - Struggle for Survival',
            fragment: 'gold-ore',
            recipe: [
                'ethereal-cloak',
                'mystic-dragonscale',
                'destruction'
            ]
        },
        quest2: {
            trial_name: 'Bloody Arena',
            trial_icon: 'bloody-arena',
            completions: 10
        },
        quest3: {
            chapter: 'Chapter 14 - Predator and Prey',
            requirement: 'All heroes must survive (Heroic Difficulty)'
        },
        sig_item: 'dragon-spaulders',
        sig_stats: [
            {
                stat: 'max-health',
                value: 1100,
                enchant: 987
            },
            {
                stat: 'magic-attack',
                value: 200,
                enchant: 182
            },
            {
                stat: 'physical-armor',
                value: 20,
                enchant: 21
            },
            {
                stat: 'magic-armor',
                value: 15,
                enchant: 14
            }
        ],
        forge_bonus: [
            {
                stat: 'm-attack',
                bonus: 'm-pierce',
                value: 30
            },
            {
                stat: 'm-armor',
                bonus: 'max-health',
                value: 900
            },
            {
                stat: 'p-armor',
                bonus: 'm-attack',
                value: 150
            }
        ]
    }
}