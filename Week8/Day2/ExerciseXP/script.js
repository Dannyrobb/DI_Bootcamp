let marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};

//1
let jsonObj = JSON.stringify(marioGame);
console.log(jsonObj);
//nested Objects still show up but one after the othrer without spaces.

//2
let jsonObj2 = JSON.stringify(marioGame, null, " ");
console.log(jsonObj2);
