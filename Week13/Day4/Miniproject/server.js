const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const axious = require("axios");
app.set("view engine", "ejs");
app.set("views", __dirname + "/public/pages");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", express.static(__dirname + "/public"));
let Parser = require("rss-parser");
let parser = new Parser();
async function rssFeed() {
  let feed = await parser.parseURL("https://www.thefactsite.com/feed/");
  //   console.log(feed.title);
  return feed;
}
let feeds = rssFeed().then((res) => res.items);

app.get("/", (req, res) => {
  res.render("index.ejs", {
    feed: feeds,
  }),
    console.log(feeds);
});

app.get("/search", (req, res) => {
  res.render("search.ejs", { feed: rssFeed().then((res) => res.json()) });
});
app.listen(5000);
