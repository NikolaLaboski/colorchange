// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
  // links.classList.toggle("show-links");
});

/*
const navToggle = document.querySelector(".nav-toggle");
-This line selects the HTML element with the class "nav-toggle" and 
stores it in the variable navToggle. This element is typically a button
 representing the navigation toggle (hamburger icon).

const links = document.querySelector(".links");
- This line selects the HTML element with the class "links" and stores
 it in the variable links. These are the navigation links that you want
  to show/hide.

navToggle.addEventListener("click", function() {...});
- This line adds an event listener to the navToggle element for the
 "click" event. The function inside the event listener is executed when
  the "click" event occurs on the navToggle element.

if (links.classList.contains("show-links")) { ... }
- This condition checks whether the links element currently contains
 the class "show-links."

links.classList.remove("show-links");
- If the condition is true (meaning the "links" element has the class
 "show-links"), this line removes the class "show-links," hiding the 
 navigation links.

links.classList.add("show-links");
- If the condition is false (meaning the "links" element does not have
 the class "show-links"), this line adds the class "show-links" 
 displaying the navigation links.

The script essentially toggles the visibility of the navigation links
 when the navigation toggle button is clicked. If the links are hidden,
  it shows them; if they are visible, it hides them. The show-links 
  class is used to control the visibility through CSS styles.
*/

/*
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links");
    }
    else{
        links.classList.add("show-links");
    }
});
*/
