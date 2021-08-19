//  functions
function hello(a,b){
     console.log(`The sum of the two numbers is ${a+b}`);

  }
 hello(2,3);


// function 2 // return functions
 function conveterNum(num){
     return num/ 100;
     }
 console.log(conveterNum(50));


 function add(a ,b){
     return a+b;
  }
  console.log(add(2,4));


// function 3 // arrow functions
 const coNum = (num) => {
    return num /100;
  }
 console.log(coNum(50));
// next method of an arrow functions
 const sum = (a ,b) => {
     return a-b;
  }
    console.log(sum(78,67));

//function 4 arrow functions
 const cNum = num => num / 100;

  console.log(cNum(50));

  const add = (a,b) => a+b;
  console.log(add(3,4));