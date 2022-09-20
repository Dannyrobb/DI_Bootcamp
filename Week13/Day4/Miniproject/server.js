const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const axious = require("axios");
let Parser = require("rss-parser");

app.set("view engine", "ejs");
app.set("views", __dirname + "/public/pages");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", express.static(__dirname + "/public"));

let parser = new Parser();

async function rssFeed() {
  let feed = await parser.parseURL("https://www.thefactsite.com/feed/");
  //   console.log(feed.title);
  return feed;
}

app.get("/", (req, res) => {
  rssFeed()
    .then((feeds) => {
      console.log(feeds);
      res.render("index.ejs", {
        feed: feeds.items,
      });
    })
    .catch((e) => {
      console.log(e);
    });
});

app.get("/search", (req, res) => {
  rssFeed()
    .then((feeds) => {
      // console.log(feeds);
      res.render("search.ejs", {
        feed: feeds.items,
      });
    })
    .catch((e) => {
      console.log(e);
    });
});
app.listen(5000);
