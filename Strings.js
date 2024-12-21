// strings
let str = "Hello";
console.log(str[0]);
let str2 = "hai";
console.log(str2[1]);

//templates
let sentence = 'This is a template literal example';
console.log(sentence);
console.log(typeof sentence);

//example
let obj = {
    item:"pencil",
    price: 15,
};
//literal method
let output = 'the cost of ${obj.item} is ${obj.price} rupees';
console.log(output);
//normal method
console.log("cost of", obj.item, "is", obj.price);

//example
console.log("Hello\nHai");
console.log("Hello\tWorld");

//Methods
let str3 = "Hello";
/*console.log(str3.toUpperCase);
console.log(str3.toLowerCase);*/
let str4 = " H e l l o ";
console.log(str4.trim()); // removes whitespaces

//Slice
let str5 = "12345";
console.log(str5.slice(1, 3));
console.log(str5.slice(2, 5));

//example
let str6 = "Jhonny";
console.log(str6.slice(1, 4));

//concat
let str7 = "Hello";
let str8 = "World";
console.log(str7)
console.log(str8);
let res = str7.concat(str8);
console.log(res);

//Replace
let str9 = "World";
console.log(str9);
let res1 = str9.replace("o", "a");
console.log(res1);

//example
let str11 = "Hello";
console.log(str11);
let res2 = str11.replace("H", "y");
console.log(res1);

//example
let str12 = "SWEAT";
console.log(str12);
let res3 = str12.replace("A", "E");
console.log(res3);

//example
let str13 = "Hello";
console.log(str13);
let res4 = str13.replace("lo", "p");
console.log(res4);

//cahrAt
let str14 = "HelloWorld";
console.log(str.charAt(3));
console.log(str.charAt(1));
console.log(str.charAt(5));

