const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  /*This sets up an event listener on the about element for the "click" event. 
    When a click occurs inside the about element, the provided function will be executed. */
  const id = e.target.dataset.id;
  /*This line gets the value of the data-id attribute of the clicked element (e.target). 
  The data-id attribute is expected to contain an identifier associated with the clicked button. */
  if (id) {
    /* This checks if id exists. If it does, it means a button with a data-id attribute was clicked. 
    Remove selected from other buttons */
    btns.forEach(function (btn) {
      /*This loop removes the "active" class from all buttons (btns) to reset their appearance. */
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    /*This adds the "active" class to the clicked button (e.target) */
    // hide other articles
    articles.forEach(function (article) {
      /*This loop removes the "active" class from all articles (articles) to hide their content. */
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    /*This line selects the HTML element with the ID matching the id obtained from the clicked button */
    element.classList.add("active");
    /*This adds the "active" class to the selected article, making its content visible or changing its appearance. */
  }
});

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  }
});
