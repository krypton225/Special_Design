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
    imgSrc: "background-4.png",
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

const counterOfImagesInLandingPage = () => {
  setInterval(() => {
    let myRandomNumber = getRandomNumber(myImages.length);

    landing.style.backgroundImage = `url("../imgs/backgrounds-landing/${myImages[myRandomNumber].imgSrc}")`;
    landingIntroTitle.textContent = myImages[myRandomNumber].landingTitle;
  }, 3000);
};

counterOfImagesInLandingPage();

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
