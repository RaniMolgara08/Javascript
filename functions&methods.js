//functions - block of code that performs a specific task, can be invoked whenever needed
console.log("hello!");

//function definition
function myfunction(){
    console.log("welcome");
    console.log("Javascript");
}
//funtion call / invoke
myfunction();

//example
function sum(x,y){
    console.log(x+y);
}
let val = sum(3,4);
console.log(val);

//array funcation : comapct way of writing function
//sum fun.
function sum(a, b) {
    return a+b;
}
(a, b) => {
    console.log(a+b);
}

//mulitplication fun.
function mul(a, b) {
    return a*b;
}
(a, b) => {
    console.log(a*b);
}


//example
function countvowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count++;
        }
    }
    console.log(count);
}


//example
let nums = [2, 3, 4, 5];
nums.forEach((num) => {
    console.log(num*num);
});
