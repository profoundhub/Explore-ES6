//Extending Classes

class Olympics {

}

class Sports extends Olympics {

}

class Men extends Sports {

}

class Women extends Sports {

}
/*
Structure:

Olympics <-- (extends) Sports  <-- (extends) Men
Olympics <-- (extends) Sports  <-- (extends) Women

 Men > Sports > Olympics
 Women > Sports > Olympics
*/

// let sport = new Sports('S001');
