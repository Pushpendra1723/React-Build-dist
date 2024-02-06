const express = require("express");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.use(express.static("dist"));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello pushpendra, server is connected");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      type: "general",
      setup: "What do you call an elephant that doesn’t matter?",
      punchline: "An irrelephant.",
      id: 1,
    },
    {
      type: "general",
      setup: "How do you make a tissue dance?",
      punchline: "You put a little boogie on it.",
      id: 2,
    },
    {
      type: "general",
      setup: "What is the tallest building in the world?",
      punchline: "The library, it’s got the most stories!",
      id: 3,
    },
    {
      type: "general",
      setup: "What musical instrument is found in the bathroom?",
      punchline: "A tuba toothpaste.",
      id: 4,
    },
    {
      type: "general",
      setup: "Did you know that protons have mass?",
      punchline: "I didn't even know they were catholic.",
      id: 5,
    },
    {
      type: "general",
      setup: "What do you call a singing Laptop?",
      punchline: "A Dell",
      id: 6,
    },
    {
      type: "general",
      setup: "did you know the first French fries weren't cooked in France?",
      punchline: "they were cooked in Greece",
      id: 7,
    },
    {
      type: "general",
      setup: "How do you organize an outer space party?",
      punchline: "You planet",
      id: 8,
    },
    {
      type: "general",
      setup: "Did you hear about the submarine industry?",
      punchline: "It really took a dive...",
      id: 9,
    },
    {
      type: "general",
      setup: "What's the difference between a guitar and a fish?",
      punchline: 'You can tune a guitar but you can\'t "tuna"fish!',
      id: 10,
    },
  ];

  res.send(jokes);
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
