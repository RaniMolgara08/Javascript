//Asynchronous 
console.log("one");
console.log("two");
console.log("three");

//setTimeout function : executes the function
function hello() {
console.log("hello");
}
setTimeout(hello, 4000);  // in 4seconds hello will print

console.log("four");
console.log("five");

//callbacks
function sum(a, b){
    console.log(a + b);
}
function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}
calculator(1, 2, sum);

//example
const hai = () => {
    console.log("hai");
};
setTimeout(hai, 2000);

//nesting else
let age = 19;
if(age>=18) {
    if (age >= 70) {
        console.log("senior");
    } else {
        console.log("middle");
    }
} else {
    console.log("child");
};

//nested loops
for(let i=0; i<10; i++) {
    let str="";
    for(let j=0; j<5; j++) {
        str = str + j;
    }
    console.log(i, str);     
};

//example
function getData(dataId, getNextData) {
    //2secs
    setTimeout(() => {
    console.log("data", dataId)
    if (getNextData) {
        getNextData();
    }
}, 2000);
}
 
//callback hell
getData(1, () => {
    console.log("waiting for Data2...");
    getData(2, () => {
        console.log("waiting for Data3...");
        getData(3, () => {
            console.log("waiting for Data4...");
            getData(4, () => {
                console.log("waiting for Data5...");
                getData(5);
            });
        });
    });                                                
});


//promises : eventual completion os task
const getPromise = () => {
let promise = new promise( (resolve, reject) => {
    console.log("i am a promise");
    reject("error");
});
};
let promise = getPromise();
promise.then((res) => {
console.log("promise fulfilled", res);
});
promise.catch((err) => {
    console.log("rejected", err);
});


//example
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
        });
}
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 8000);
        });
}

console.log("fetching data1");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log(res);
});
console.log("fetching data2");
let p2 = asyncFunc2();
p2.then((res) => {
    console.log(res);
});


//Async-Await
function AudioParam() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}
async function getWeatherData() {
    await api();
    await api();
}

//IIFE : Immediately Invoked Function Expression
