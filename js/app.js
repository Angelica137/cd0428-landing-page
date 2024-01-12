/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const navBar = document.getElementById("navBar");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function createNavLinks(section) {
  const li = documnet.createElement("li");
  const a = documnent.createElement("a");
  a.textContent = section.querySelctor("h2").textContent;
  a.href = "#" + section.id;

  li.appendChild(a);
  URL.appendChild(li);
}

navBar.appendChild(ul);
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
