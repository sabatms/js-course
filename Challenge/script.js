// create an array
// add your favorite sports
// use this  list in a text
// remove the last item from the list
// create a new array for the first two items than replace it in main array.

const sports = [];
sports.push("football");
sports.push("basketball");
sports.push("vollyball");
sports.push("tennis");
sports.push("handball");

const StringSports = sports.join(" , ");
const text = `My favorit Sports are ${StringSports}.`;
const lastIndex = sports.length - 1;
sports.splice(lastIndex);
const SportsOneTwo = sports.slice(0, 2);
sports.splice(0, 2, SportsOneTwo);
console.log(sports);
