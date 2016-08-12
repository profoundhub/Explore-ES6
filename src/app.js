//Extending Classes
class Olympics {
  constructor() {
    this.countryRepresented = true;
  }
  watch() {
    console.log('Watching the Olympics!');
  }
  static getCountry() {
    console.log('Canada');
  }
}

class Sports extends Olympics {
  constructor() {
    super();
  }
}

class Men extends Sports {
  constructor() {
    super();
    this.countryRepresented = false;
  }
  watch() {
    console.log('Watching the Olympics?');
  }
  static getCountry() {
    super.getCountry();
    console.log('Japan');
  }
}

class Women extends Sports {
  constructor() {
    super();
  }
  watch() {
    super.watch();
    console.log('Watching the Olympics, too?');
  }
}

let w = new Women();
let m = new Men();

w.watch();
m.watch();

Women.getCountry();
Men.getCountry();

// m.getCountry();
// w.getCountry();


// console.log(w.countryRepresented);
// console.log(m.countryRepresented);
