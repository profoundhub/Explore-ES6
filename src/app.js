//Extending Classes

class Olympics {

}

class Sports extends Olympics {

}

class Men extends Sports {

}

class Women extends Sports {

}

let w = new Women();

// w is an instanceof Olympics && Sports!

console.log(w instanceof Sports);
console.log(w instanceof Olympics);
console.log(w instanceof Object);















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
