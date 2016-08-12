class Sports {
  constructor(id, name) {
      // console.log('Name of Sport: ' + sportName, id);
      this.id = id;
      this.name = name;

  }
}
let sport = new Sports('S001','Swimming');


// Let's simplify that:  console.log('Sport: ' + sport.sportName + ' ' + sport.id);

console.log('Sport ID: ' + sport.id + ' & Sport Name: ' + sport.name);


// console.log(sportName);
// console.log(sport instanceof Sports);


/* What we have learnt so far ...

Sports = function (... class === function ? )
sport = object
sport instanceof Sports = true (boolean)

*/
