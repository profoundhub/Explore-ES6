class Sports {
  constructor(id) {
      this._id = id;
  }

  get id() {
    return this._id;

  }
}

let sport = new Sports('S001');

console.log("1: " + sport);
console.log("1a: " + sport.id);
console.log("1b: " + sport._id);

console.log("2: " + Sports);
console.log("3: " + Sports.id);
console.log("4: " + Sports._id);
