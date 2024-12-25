/* The idea is following:
We're going to have a button. As I'm clicking the button, we'll change
the background (the color of our body), and also we'll display what
color we're using.
And we'll have two setups, we'll have a simple one using just specific
amount of colors, so it's going to be fixed array with fixed amount
of items.
And then we'll have the second set of the hex colors, and
in this case we'll have "infinite" amount of options. 
Everytime we'll click on a button, it will generate a unique x color.
*/

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random number between 0 - 3
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
