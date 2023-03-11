function domainNameGen() {
  let pronoun = ["el", "un"];
  let adj = ["gran", "fuerte"];
  let noun = ["monstruo", "animal"];
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

console.log(domainNameGen());
