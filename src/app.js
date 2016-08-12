//Extending Classes
class Olympics {
  constructor() {
    this.countryRepresented = true;
  }
  watch() {
    console.log('Watching the Olympics!');
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
}

class Women extends Sports {
  constructor() {
    super();
  }
}

let w = new Women();
let m = new Men();

// console.log(w.countryRepresented);

w.watch();
console.log(m.countryRepresented);
