/* eslint-disable */
/* import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() { */
// console.log("Hello Rigo from the console!");
//write your code here

function combination() {
  let pronoun = ["el", "la"];
  let adj = ["gran", "chocho"];
  let noun = ["jogger", "racoon"];
  let extention = ["com", "net", "org", "es"];

  let string = [];

  for (let i of pronoun) {
    for (let x of adj) {
      for (let y of noun) {
        for (let z of extention) {
          string.push(i + x + y + "." + z);
        }
      }
    }
  }

  return string;
}

console.log(combination());
