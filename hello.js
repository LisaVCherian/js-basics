var cowsay = require("cowsay");
const Quote = require("inspirational-quotes");
const yoMamma = require('yo-mamma').default;
let insult;
insult = yoMamma(); 
let str = Quote.getRandomQuote(); 

console.log(
  cowsay.say({
    text: insult,
    e: "oO",
    T: "U ",
  })
);