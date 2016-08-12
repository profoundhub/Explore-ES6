class Sports {
  constructor(id) {
      this._id = id;
  }

  get id() { // id is not a function either. it is a property.
    return this._id;
  }

  set id(value) {
    this._id = value;
  }
}

let sport = new Sports('S001');

sport.id = 's005'; // new value!

console.log("1: " + sport);
console.log("1a: " + sport.id);
console.log("1b: " + sport._id);

console.log("2: " + Sports);
console.log("3: " + Sports.id);
console.log("4: " + Sports._id);

// that's it for now, going to take a break now!
