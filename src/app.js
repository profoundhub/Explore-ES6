class Sports {
  constructor(id, name) {
      // console.log('Name of Sport: ' + sportName, id);
      this.id = id;
      this.name = name;

  }
  // Methods (looks like a function, but is it?)
  location() {
    console.log('Sports ' + this.id + ' in Rio');
    
  }
}
Sports.olymics = 2016; // Static Properties.



let sport = new Sports('S001','Swimming');
let sport2 = new Sports('S002','Fencing');


console.log('ID #1: ' + sport.id + ' & Sport #2 ID: ' + sport2.id);
console.log('Year ' + Sports.olymics); // Static Properties.

// console.log('Sport #1 ID: ' + sport.id + ' & Sport #2 ID: ' + sport2.id);
// Let's simplify that:  console.log('Sport: ' + sport.sportName + ' ' + sport.id);
// console.log('Sport ID: ' + sport.id] + ' & Sport Name: ' + sport.name);
// console.log('Sport ID: ' + sport['id'] + ' & Sport Name: ' + sport['name']);

// console.log(sportName);
// console.log(sport instanceof Sports);


/* What we have learnt so far ...

Sports = function (... class === function ? )
sport = object
sport instanceof Sports = true (boolean)

*/
