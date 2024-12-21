console.log("hello");
alert("pandu");
(document.body.style.background = "pink");

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
newBtn.style.color = "white";
newBtn.style.backgroundcolor = "red";

document.querySelector("body").prepend(newBtn);


let para = document.querySelector("p");