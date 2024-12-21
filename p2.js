//print even numbers
for(num=0; num <= 100; num++) {
    if(num % 2 == 0){
    console.log("num :", num);
}
}

//game - you start with random number. enter a number until user enter correct value
let gameNum = 15 ;
let usernum = prompt("guess  the number:");
while(usernum != gameNum) {
    usernum = prompt("you guess wrong number. try again :"); 
}
console.log("Congrats, You enter Right number");

