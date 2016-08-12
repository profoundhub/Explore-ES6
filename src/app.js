class Sports {
  constructor(sportName, id) {
      // console.log('Name of Sport: ' + sportName, id);
      this.sportName = sportName;
      this.id = id;
  }
}
let sport = new Sports('Swimming', 'S001');

console.log('Sport: ' + sport.sportName + ' ' + sport.id);

// console.log(sportName);
// console.log(sport instanceof Sports);


/* What we have learnt so far ...

Sports = function (... class === function ? )
sport = object
sport instanceof Sports = true (boolean)

*/
