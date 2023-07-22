const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();

const dataFile = path.join(__dirname, "data.json");

//support POSTing form data with URL encoded
app.use(express.urlencoded({ extended: true }));

//enable CORS
app.use((req, resp, next) => {
  resp.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/poll", async (req, resp) => {
  let data = JSON.parse(await fs.readFile(dataFile, "utf-8"));
  const totalVotes = Object.values(data).reduce((total, n) => (total += n), 0);
  console.log("total votes:" + totalVotes);

  data = Object.entries(data).map(([label, votes]) => {
    return {
      label,
      percentage: ((100 * votes) / totalVotes || 0).toFixed(0),
    };
  });
  resp.json(data);
});

app.post("/poll", async (req, resp) => {
  const data = JSON.parse(await fs.readFile(dataFile, "utf-8"));

  data[req.body.add]++;

  await fs.writeFile(dataFile, JSON.stringify(data));
  resp.end();
});

app.listen(5000, () => {
  console.log("server is running on port 5000.....");
});
