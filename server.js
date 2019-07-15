const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
const { Client } = require("pg");

const connection = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

connection.connect(err => {
  //  console.log(process.env);
  //  console.log(process.env.DATABASE_URL);
  if (err) {
    return err;
  }
});

app.get("/skills", (req, res) => {
  connection.query("SELECT * FROM portfolio.skills", (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      // res.json({ data: results.rows });
      res.send(results.rows);
      // res.send("Hey, we got here");
      // console.log("results: " + results.rows);
    }
  });
});

app.get("/projects", (req, res) => {
  connection.query("SELECT * FROM portfolio.projects", (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      res.send(results.rows);
    }
  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});
