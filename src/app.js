function domainNameGen() {
  let pronoun = ["el", "un"];
  let adj = ["gran", "fuerte"];
  let noun = ["monstruo", "animal"];
  let extention = ["com", "net", "org"];

  let result = [];

  for (let i of pronoun) {
    for (let x of adj) {
      for (let y of noun) {
        for (let z of extention) {
          result.push(i + x + y + "." + z);
        }
      }
    }
  }
  return result;
}

console.log(domainNameGen());
