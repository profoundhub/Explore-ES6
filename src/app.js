//Extending Classes
class Olympics {
  constructor(countryRepresent) {
    this.countryRepresent = countryRepresent;
    // console.log('Olympics constructor');
  }
}

class Sports extends Olympics {
  constructor(countryRepresent) {
    super(countryRepresent);
    this.countryRepresent = countryRepresent;
    // console.log('Sports constructor');
  }
}

class Men extends Sports {
  constructor(countryRepresent) {
    super(countryRepresent);
    this.countryRepresent = countryRepresent;
    // console.log('Men constructor');
  }
}

class Women extends Sports {
  constructor(countryRepresent) {
    super(countryRepresent);
    this.countryRepresent = countryRepresent;
    // console.log('Women constructor');
  }
}

let w = new Women('Canada');
let m = new Men('Canada');

    console.log(w.countryRepresent);

/* END Of Part 2c */










// w is an instanceof Olympics && Sports!
/*
console.log(w instanceof Sports);
console.log(w instanceof Olympics);
console.log(w instanceof Object);
*/
// Done Part 2 a















/*
console.log(w instanceof Sports);
console.log(w instanceof Olympics);

console.log('Sports: ' , w instanceof Sports);
console.log('Olympics: ' , w instanceof Olympics);
*/


/*
Structure:

Olympics <-- (extends) Sports  <-- (extends) Men
Olympics <-- (extends) Sports  <-- (extends) Women

 Men > Sports > Olympics
 Women > Sports > Olympics
*/

// let sport = new Sports('S001');
