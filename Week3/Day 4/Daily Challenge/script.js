let sentence = ("The movie is not that bad, I like it");
let wordNot=(sentence.indexOf("not"));
let wordBad=(sentence.indexOf("bad"));
if (sentence.indexOf("not")< sentence.indexOf("bad")) {
console.log( sentence.replace('not that bad','good'));
}else{
console.log(sentence);
}