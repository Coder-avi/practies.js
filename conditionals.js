//Conditionals
let a = 44;
let b = 2;

function evaluate(){
    if(a<b){
        return true
    }
    else{
        return false
    }
}
console.log(evaluate());

let c = 48;
let d = 100;

function evaluate(){
   return a > b
}
console.log(evaluate());


//short hand if statement
//if animals equals to cat then return ture then : is else return false
let animal = 'a';
const likesCats = animal === 'cat' ? true : false; 
console.log(likesCats);

// switch and break case
let animals = 'dogs'
switch(animals){
    case 'dogs':
        console.log('dog');
        break
    case 'cats':
        console.log('cats');
        break
    default:
        console.log('Neither');
        break
    
}


