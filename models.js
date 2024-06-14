
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/models', (req, res) => {
  const models = [{text: "ThingAI 2.0", value: "ThingAI 2.0"}, {text: "ThingAI 2.0 Lite", value: "ThingAI 2.0 Lite"}, {text: "ThingAI 1.1", value: "ThingAI 1.1"}, {text: "ThingAI 1.1 Lite", value: "ThingAI 1.1 Lite"}, {text: "ThingAI 1.0", value: "ThingAI 1.0"}, {text: "ThingAI 1.0 Lite", value: "ThingAI 1.0 Lite"}, {text: "ThingAI 2.0 Legacy", value: "ThingAI 2.0 Legacy"}, {text: "Dumbass 1.5+", value: "Dumbass 1.5+"}];
  
  res.json(models);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
