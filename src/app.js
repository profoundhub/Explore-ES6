//Extending Classes
class Olympics {
  constructor() {
    console.log('Olympics constructor');
  }
}

class Sports extends Olympics {
  constructor() {
    super();
    console.log('Sports constructor');
  }
}

class Men extends Sports {
  constructor() {
    super();
    console.log('Men constructor');
  }
}

class Women extends Sports {
  constructor() {
    super();
    console.log('Women constructor');
  }
}

let w = new Women();
let m = new Men();














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
