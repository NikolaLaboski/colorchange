const colors = ["blue","yellow","rgba(252, 3, 61)","#03fc52"];
const btn = document.getElementById("btn");
const color = document.querySelector('.color');

btn.addEventListener("click", function(){

    document.body.style.backgroundColor=colors[getRandomNumber()];
    color.textContent=colors[getRandomNumber()];
   
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}