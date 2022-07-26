//1
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  //2
  watch() {
    return `${this.uploader} watched all ${this.time} of ${this.title}`;
  }
}

//3
let video1 = new Video("Harry Potter", "Dan the Man", "3 hours");
console.log(video1.watch());
//4
let video2 = new Video("Funny Cats Meowing", "Adane", "62 hours"); // ;)
console.log(video2.watch());
//5
const vidArr = [
  { title: "random1", uploader: "random1", time: "random1" },
  { title: "random2", uploader: "random2", time: "random2" },
  { title: "random3", uploader: "random3", time: "random3" },
  { title: "random4", uploader: "random4", time: "random4" },
  { title: "random5", uploader: "random5", time: "random5" },
];
