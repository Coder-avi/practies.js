//  Loops
//  while loops
 i =  0; // first we need to defined i
 while (i < 10){  /// then conditions
    console.log(i);
     i++;    // incurrement // i-- for decerasement
 }
// for loops
 for(i=0; i<10; i++){
      console.log(i);
 }


//  loops in array
const people = [
    {
        firstName: 'Avinash',
        lastName: 'Lamichhane',
        age:19,
        address:'nuwakot'

    },
    {
        firstName:'kiran',
        lastName:'pathak',
        age:20,
        address:'kathmandu'

    }

]

console.log(people.length);


for (i=0; i<people.length; i++){
console.log(people[i]); 
}

for (a of people){
    console.log(a.firstName);
}

// forEach loops in array with functions

people.forEach(function(a){
    console.log(a.address)
})
// forEach loops in array with  arrow functions

people.forEach(a => console.log(a.age))