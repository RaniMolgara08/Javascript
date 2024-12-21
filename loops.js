// forl loop
for(let a = 1; a<=5; a++) {
    console.log("John");
}

//infinte loop
for(let b = 1; b<=0; b++) {
    console.log("John :", b);
}

//while loop
let c = 1;
while ( c <= 5) {
    console.log("c :", c);
    c++;
}
//dowhile looop
let ab = 1;
do {
    console.log("ab :", ab);
    ab ++;
}   while (ab <= 10);

//for-of loop (helps in iterate)
let str = "Hello";
for(let i of str){
    console.log("i :", i);
}
 // to find string size
let str1 = "Hello";
let size = 0;
for(let i of str1){
    console.log("i :", i);
    size++
}
console.log("string size:", size);


//for-in loop (returns the keys and their values)
let student = {
    name: "john",
    cgpa: 8,
    ispass: true
};
for(let i in student){
    console.log(i);
    console.log("i = ", i, "value =" , student[i] );
}




