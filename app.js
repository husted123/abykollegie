/* var list = document.querySelectorAll('.box');
console.log(list)


for (let i = 0; i < list.length; i++ ) {
    list.item(i).classList.add("yellow");
} */

let colors = ["green","yellow","red"];
let boxes = document.querySelectorAll(".box");

for (i=0; i < boxes.length; i++){
    boxes[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

let refreshRate = 21000;
let lastUserAction = 0;
let hasFocus = false;
let lostFocusCount = 0;

let focusMargin = 10;

function reset(){
    lastUserAction = 0;
    console.log("reset");
}

function windowHasFocus(){
    hasFocus = true;
}


setInterval(function() {
    lastUserAction++;
    refreshCheck();
}, 1000);

function refreshCheck() {
    let focus = window.onfocus;
    if ((lastUserAction >= refreshRate &&! hasFocus && document.readyState == "complete") || lostFocusCount > focusMargin) {
        window.location.reload();
        reset();
    }
}

//fitness

 var num = Math.round((Math.random()*4));
document.querySelector(".num").innerHTML = num + " / 4";
 console.log(num)

if (num === 0) {
document.querySelector("#fit").setAttribute("src","media/0.png")
}

else if (num === 1){
document.querySelector("#fit").setAttribute("src","media/1.png")
}


else if(num === 2){
    document.querySelector("#fit").setAttribute("src","media/2.png")
}

else if(num === 3){
    document.querySelector("#fit").setAttribute("src","media/3.png")
}

else if(num === 4){
    document.querySelector("#fit").setAttribute("src","media/4.png")
};