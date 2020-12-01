const router = require("express").Router();

//Custom Middleware
const { validateHero } = require("./heroes-service");

//Database connection
const Heroes = require("./heroes-model");

router.post("/", (req, res) => {
  const { hero } = req.body;

  Heroes.add(hero)
    .then((hero) => {
      res.status(200).json(hero);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.get("/", (req, res) => {
  Heroes.find()
    .then((heroes) => {
      if (heroes.length) {
        res.status(200).json(heroes);
      } else {
        res.status(404).json({ message: "No heroes found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.get("/:hero", validateHero, (req, res) => {
  const { hero } = req.params;

  Heroes.findBy({ name: hero })
    .then((hero) => {
      res.status(200).json(hero);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
