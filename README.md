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

```

---

## Endpoints
---
`api/heroes`
`api/heroes/:hero`
