// get only unique categories - HARDEST ONE
// iterate over categories return buttons
// make sure to select buttons when they are available

// items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "shakes",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// quering the DOM
const menuItemsContainer = document.querySelector("section-center");
const btnContainer = document.querySelector("btn-container");

// displaying menu items
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article>
              <img src=${item.img} alt=${item.title} />
              <div>
                <header>
                  <h4>${item.title}</h4>
                  <h4>${item.price}</h4>
                </header>
                <p>${item.desc}</p>
              </div> 
            </article>`;
  });
  displayMenu = displayMenu.join("");
  menuItemsContainer.innerHTML = displayMenu;
}

/* displaying menu buttons (find unique categories, creating category buttons, 
  displaying buttons in container, filtering items) 
*/
//find unique categories
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["ALL"]
  );

  //create category buttons
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn">
              ${category}
            </button>`;
    })
    .join("");
  //display buttons in container
  btnContainer.innerHTML = categoryBtns;

  //filter items
}

/*
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });

  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtns;

  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}

/*
const sectionMenu = document.querySelector(".section-center");
const buttonMenu = document.querySelector(".btn-container");

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
                <img src=${item.img} class="photo" alt=${item.title}>
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price}</h4>
                    </header>
                    <p class="item-text">
                        ${item.desc}
                    </p>
                </div>
            </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionMenu.innerHTML = displayMenu;
}

displayMenuItems(menu);


There's an array called "menu" and it contains objects. 
Each object represents a menu item and includes properties like
"id", "title", "category", "price", "img" and "desc".

Next, we are quering the DOM, and we select the HTML elements 
where the menu items and buttons will be displayed, respectivelly.

displayMenuItems is a function that takes an array of menuItems
as an argument. It uses the .map function on the menuItems array
to transform each menu item object into an HTML string,
representing a menu item.
For each menu item object, it constructs an HTML structure using 
template literals, including the item's image, title, price, 
and description.
The resulting array of HTML strings representing menu items is 
then joined into a single string, using .join("").
Finally, we set the innerHTML of the section element to the
concatenated HTML string, effectively displaying the menu items
on the page.



function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.incudes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
              ${category}
            </button>`;
    })
    .join("");
  buttonMenu.innerHTML = displayMenuButtons;

  //filter buttons

  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

displayMenuButtons(menu);
*/
