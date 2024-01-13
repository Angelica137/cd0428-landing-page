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
 */
const sections = document.querySelectorAll("section");
const navBar = document.getElementById("navBar");

/**
 * End Global Variables
 * Start Helper Functions
 */

// Check if the section is in view
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
// get the scroll to work, it works now
function setActiveSection() {
  sections.forEach((section) => {
    const navLink = document.querySelector(
      `a[href="#${section.id}"]`
    ).parentElement;
    if (inView(section)) {
      section.classList.add("your-active-class");
      navLink.classList.add("active-link");
    } else {
      section.classList.remove("your-active-class");
      navLink.classList.remove("active-link");
    }
  });
}

// try implment throttle + encapsulation
function throttle(func, duration) {
  let isThrottled = false;

  return function () {
    if (!isThrottled) {
      func.apply(this, arguments);
      isThrottled = true;

      setTimeout(() => {
        isThrottled = false;
      }, duration);
    }
  };
}

// Scroll to anchor ID using scrollTO event
// moved this from main so I can add this to the DOMContentLoaded
function addNavEventListeners() {
  document.querySelectorAll("#navbar__list a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("href").substring(1);
      const section = document.getElementById(sectionId);

      // this needs css to work
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
}

/**
 * End Helper Functions
 * Begin Main Functions
 */

// build the nav
function buildNavigation() {
  const ul = document.getElementById("navbar__list");
  sections.forEach((section) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = section.querySelector("h2").textContent;
    a.href = `#${section.id}`;
    a.classList.add("menu__link");

    li.appendChild(a);
    ul.appendChild(li);
  });
  navBar.appendChild(ul);
}

/**
 * End Main Functions
 * Begin Events
 */

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  // Build menu
  // I think this means nav?
  buildNavigation();
  // Scroll to section on link click
  // this function is declared above but called here
  addNavEventListeners();
  // Set sections as active
  const throttleSetActiveSection = throttle(setActiveSection, 200);
  window.addEventListener("scroll", throttleSetActiveSection);
});
