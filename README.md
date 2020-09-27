# Node.js Back-End API for Soul Hunters Hero Guide
An API I am building to serve data to my shhg-react project. 

## Schema

#### Heroes
- For any endpoints returning a list of Hero data

---

```js
{
  "id": INTEGER; // assigned by database, auto increments
  "name": STRING; // not nullable, unique
  "position": STRING; // not nullable
  "first_appeared": STRING; // not nullable
  "available_in": STRING; // not nullable
  "awakened": BOOLEAN; // defaults to false
}
```

---

#### Hero Guide
- For any endpoints returning an individual Hero's full guide data

---

```js
{
  "hero_info": {
    "id": INTEGER;
    "name": STRING;
    "title": STRING;
    "quote": STRING;
    "position": STRING;
    "role": STRING;
    "description": STRING;
    "first_appeared": STRING;
    "card_type": INTEGER;
    "chest_type": STRING;
    "available_in": STRING;
    "stat_growth": [
      {
        "health": INTEGER;
        "p_attack": INTEGER;
        "m_attack": INTEGER;
        "p_armor": INTEGER;
        "m_armor": INTEGER;
      },
      {
        "health": INTEGER;
        "p_attack": INTEGER;
        "m_attack": INTEGER;
        "p_armor": INTEGER;
        "m_armor": INTEGER;
      }
    ],
    "medallions": [
      STRING;
    ]
  },
  "abilities": [
  // 4 abilities will be in this array. 5 if hero is awakened
    {
      "name": STRING;
      "description": STRING;
      "attributes": STRING;
      "stats": [
        STRING;
        STRING;
        STRING;
      ]
    }
  ],
  "fusion_items": {
  // Each fusion set consists of 6 item names in an array.
  // fusions sets will be returned for:
  // "purple", "purple1", "purple2", "purple3","purple4", 
  // "orange", "orange1", and "orange2"
    "purple": [
      STRING;
      STRING;
      STRING;
      STRING;
      STRING;
      STRING;
    ]
  },
  "key_items": [
    // 18 Key items will be returned in this array. 
    // Each one consists of an item name and a quantity
    {
      "item": STRING;
      "quantity": INTEGER;
    }
  ],
  "academy_trees": [
    STRING;
    STRING;
  ],
  "awakening": {
    "awakened": BOOLEAN;
    "quote": STRING;
    "sig_item": STRING;
    "quest_1": {
      "chapter": STRING;
      "fragment": STRING;
      "recipe": [
        STRING;
        STRING;
        STRING;
      ]
    },
    "quest_2": {
      "trial_name": STRING;
      "trial_icon": STRING;
      "completions": INTEGER;
    },
    "quest_3": {
      "chapter": STRING;
      "requirement": STRING;
    },
    "sig_stats": [
      {
        "stat": STRING;
        "value": INTEGER;
        "enchant": INTEGER;
      },
      {
        "stat": STRING;
        "value": INTEGER;
        "enchant": INTEGER;
      },
      {
        "stat": STRING;
        "value": INTEGER;
        "enchant": INTEGER;
      },
      {
        "stat": STRING;
        "value": INTEGER;
        "enchant": INTEGER;
      }
    ],
    "forge_bonus": [
      {
        "stat": STRING;
        "bonus": STRING;
        "value": INTEGER;
      },
      {
        "stat": STRING;
        "bonus": STRING;
        "value": INTEGER;
      },
      {
        "stat": STRING;
        "bonus": STRING;
        "value": INTEGER;
      }
    ]
  }
}
```

---

## Endpoints
---
#### Heroes
| Method | Endpoint     | Description                                       |
| ------ | ------------ | ------------------------------------------------- |
| GET    | `api/heroes` | Returns an array of all Heroes with basic details |

---

#### Hero Guides

| Method | Endpoint           | Description                                   |
| ------ | ------------------ | --------------------------------------------- |
| GET    | `api/heroes/:hero` | Returns detailed guide data for a single Hero |

---



