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

// Check is the section is in view
function inView(element) {
  const bounding = element.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add class 'active' to section when near top of viewport
// I moved this from main function section to see if I could
// get the scroll to work
function setActiveSection() {
  sections.forEach((section) => {
    if (inView(section)) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  });
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function buildNavigation() {
  const ul = document.getElementById("navbar__list");
  sections.forEach((section) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = section.querySelector("h2").textContent;
    a.href = "#" + section.id;

    li.appendChild(a);
    ul.appendChild(li);
  });
  navBar.appendChild(ul);
}

// Scroll to anchor ID using scrollTO event
document.querySelectorAll("#navbar__list a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute("href").substring(1);
    const section = document.getElementById(sectionId);

    // I do not think this is working. There was no change
    //after implementation
    section.scrollIntoView({ behavior: "smooth" });
  });
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  buildNavigation();
  window.addEventListener("scroll", setActiveSection);
});
