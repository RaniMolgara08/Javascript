//arrays are collection of items
let m_std1 = 72;
let m_std2 = 85;
console.log(m_std1);
console.log(m_std2);

// one more method
let marks = [97, 82, 45, 67, 28];
console.log(marks);

//example
let fruits = ["apple", "orange", "mango", "banana", "guava" ];
console.log(fruits);
console.log(fruits.length);
console.log(typeof fruits);  //objects

//Array indices
let marks1 = [97, 82, 45, 67, 28];
console.log(marks1[0]);
console.log(marks1[2]);
console.log(marks1[4]);
marks1[0] = 66;
console.log(marks1);
console.log(marks1[0]);

//looping over array - print all elements of an array
let fruits1 = ["apple", "orange", "mango", "banana", "guava" ];
for (let i = 0; i < fruits1.length; i++) {
    console.log(fruits1[i]);
}

//for-of loop
for(let element of fruits1) {
    console.log(fruits1);
}

//example
let districts = ["hyderabad", "warangal", "suryapet", "nizamabad", "khammam"];
for(let district of districts){
    console.log(district);
    console.log(district.toUpperCase());
}

//example
let marks2 = [60, 38, 45, 28, 79, 85];
console.log(marks2);
let sum = 0;
sum = marks2[0] + marks2[1] + marks2[2] + marks2[3] + marks2[4] + marks2[5] ;
console.log(sum);
let avg = sum / marks2.length;
console.log(avg);

//Array methods
let m1 = [60, 38, 45, 28, 79, 85];
console.log(m1);
//1.push() at end & 2.pop() at end
//3.toString
let fruits2 = ["apple", "orange", "mango", "banana", "guava" ];
console.log(fruits2);
//4.toString

//5.concat
let alph1 = ["a", "b", "c"];
let alph2 = ["d", "e", "f"];
let alphabets = alph1.concat(alph2);
console.log(alphabets)

//6.unshift - (push at starting)
let names = ["john", "sony", "sweety", "lucky"];
names.unshift("pandu");
console.log(names); //pandu

//7.shift - (pop at starting)
let names1 = ["john", "sony", "sweety", "lucky"];
let nam = names1.shift();
console.log(nam); //john

//slice() - (pop)
let na = ["john", "sony", "sweety", "lucky"];
console.log(na);
console.log(na.slice(1));

//splice() - 
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, 10, 20);
console.log(arr);
//add element
arr.splice(2, 0, 10);
console.log(arr);
//delete element
arr.splice(3,1);
console.log(arr);
//replace element
arr.splice(3, 1, 50);
console.log(arr);


//example 1
let companies = ["bloomberg", "microsoft", "uber", "google", "IBM", "netflix"];
console.log(companies);
console.log(companies.slice(1));
let arr2 = (companies.splice(2, 1,"ola"));
console.log(arr2);
let arr1 = (companies.push("amazon"));
console.log(arr1);


//map method
let nums = [67, 52, 39];
nums.map((val) => {
    console.log(val);
});
let calcsquare = (num) => {
    console.log(num * num);
};

//filter : creates a new array of elements that give true for a condition
let arr4 = [1, 2, 3, 4, 5, 6, 7];
let evenArr = arr4.filter((val) => {
    return bal% 2 === 0;
});
console.log(evenArr);

//reduce : performs some operations & reduces array to a single value
let arr5 = [1, 2, 3, 4, 5];
const output = arr5.reduce((res, curr) => {
    return res + curr;
});
console.log(output);


//example
let items = [250, 645, 300, 90, 50];
let i = 0;
for(let val of items){
    console.log('value at index ${i} = ${val}');
    let offer = val / 10;
   items[i]= items[i] - offer;
   console.log('value after offer = ${items[]}');
   i++;
} 
