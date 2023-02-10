import express from "express";
import bodyParser from "body-parser";

import substances from "./chemical-substances"

const app = express();

app.get('/health', (req, res) => {
  res.send('ok');
});

app.use(express.json());
app.use("/chemical-substances", substances);

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
