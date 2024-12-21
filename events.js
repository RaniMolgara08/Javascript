//event : change in state of an object 
/*<button on click = "console.log('button was clicked');alert('hello')">
    click me
</button>*/

// event handler
let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("handler1");
    let a = 25;
    a++;
    console.log(a);
}
btn1.onclick = () => {
    console.log("handler2");
}

let div = document.querySelector("div");
div.onmouseovet = () => {
    console.log = ("you are inside");
};

//example
btn2.addEventListener("click", (evt) => {
    console.log("button2 was clicked - handler1");
});
btn2.addEventListener("click", (evt) => {
    console.log("button2 was clicked - handler2");
});