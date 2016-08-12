class Sports {
  constructor(id, name) {
      // console.log('Name of Sport: ' + sportName, id);
      this.id = id;
      this.name = name;

  }
}
let sport = new Sports('Swimming', 'S001');


// Let's simplify that:  console.log('Sport: ' + sport.sportName + ' ' + sport.id);

console.log('Sport: ' + sport.id + ' ' + sport.name);


// console.log(sportName);
// console.log(sport instanceof Sports);


/* What we have learnt so far ...

Sports = function (... class === function ? )
sport = object
sport instanceof Sports = true (boolean)

*/
