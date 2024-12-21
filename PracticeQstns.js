//get user i/p no. using prompt("enter no.:"). check no. is multiple of 5 or not
let fname = prompt("Hello");
console.log(fname);

let num = prompt("enter a number:");
if (num % 5 === 0){
console.log(num, " is multiple of 5");
}else{
console.log(num, "is not a multiple of 5");
}

// code which can give grades to students according to their scores
let score = prompt("enter a number:");
if ( score >= 90 && score <=100 ) {
    console.log(" Grade A");
}else if
    ( score >= 70 && score <=89 ) {
        console.log(" Grade B");
    }else if
    ( score >= 60 && score <=69 ) {
        console.log(" Grade C");
} else if 
    ( score >= 50 && score <=59 ) {
        console.log(" Grade D");
} else if
    ( score >= 0 && score <=49 ) {
        console.log(" Fail");
}

