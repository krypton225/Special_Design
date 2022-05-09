/**
 * * Making the background of the nav bar show when scrolling.
 **/

window.addEventListener("scroll", function () {
  const navBar = document.querySelector("#landingNavBar");
  navBar.classList.toggle("sticky-scroll", window.scrollY > 250);
});

/**
 * * Making the background of the header in the landing page changing after a seconds automatically!
 **/

let landing = document.getElementById("landing");
let landingIntroTitle = document.getElementsByClassName(
  "landing__intro__title"
)[0];

const myImages = [
  {
    imgSrc: "background-1.jpg",
    landingTitle: "hello there, man!",
  },
  {
    imgSrc: "background-2.jpg",
    landingTitle: "you are welcome!",
  },
  {
    imgSrc: "background-3.jpg",
    landingTitle: "you are welcome, second!",
  },
  {
    imgSrc: "background-4.jpg",
    landingTitle: "you are welcome, third!",
  },
  {
    imgSrc: "background-5.jpg",
    landingTitle: "you are welcome, fourth!",
  },
];

const getRandomNumber = (index) => {
  return Math.floor(Math.random() * index);
};

let bgChanging = true;
let getBgInterval;

const showingImgaesInLandingPage = () => {
  if (bgChanging) {
    getBgInterval = setInterval(() => {
      let myRandomNumber = getRandomNumber(myImages.length);

      landing.style.backgroundImage = `url("./imgs/backgrounds-landing/${myImages[myRandomNumber].imgSrc}")`;
      landingIntroTitle.textContent = myImages[myRandomNumber].landingTitle;
    }, 3000);
  }
};

showingImgaesInLandingPage();

/**
 * * Background random changing (Yes OR Not)
 */

let myButtonsSpan = document.querySelectorAll(
  ".settings__content__random-bg__buttons span"
);

myButtonsSpan.forEach((oneSpan) => {
  oneSpan.addEventListener("click", (eo) => {
    // * Remove active class.
    eo.target.parentElement.querySelectorAll(".active").forEach((item) => {
      item.classList.remove("active");
    });

    // * Add active class.
    eo.target.classList.add("active");

    if (eo.target.dataset.random === "yes") {
      bgChanging = true;
      showingImgaesInLandingPage();
    } else {
      bgChanging = false;
      clearInterval(getBgInterval);
    }

    localStorage.setItem("bg_opiton", bgChanging);
  });
});

if (localStorage.getItem("bg_option" === "true")) {
  bgChanging = true;
} else {
  bgChanging = false;
}

/**
 * * This is for opening the toggle menu of the nav bar.
 */

let landingBarsIcon = document.getElementById("barsIcon");
let navBarMenu = document.getElementById("navBarMenu");

landingBarsIcon.addEventListener("click", () => {
  navBarMenu.classList.toggle("toggle-navbar-menu");
});

/**
 * * Close the toggle menu when in responsive mode after clicking on any one of the anchors.
 */

let myLinksInMenu = document.querySelectorAll("#navBarMenu li");

myLinksInMenu.forEach((oneLink) => {
  oneLink.addEventListener("click", (e) => {
    if (navBarMenu.classList.contains("toggle-navbar-menu")) {
      navBarMenu.classList.remove("toggle-navbar-menu");
    }
  });
});
