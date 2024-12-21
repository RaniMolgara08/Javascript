//toggle button to change the theme
let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundcolor = "black";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundcolor = "white";
    }
   
        console.log(currMode);
});