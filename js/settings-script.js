/**
 * * This is for click on the setting icon and open the body content of the setting.
 */

let mySetting = document.getElementById("setting");
let settingIcon = document.getElementById("settingIcon");

settingIcon.addEventListener("click", () => {
  mySetting.classList.toggle("open");
});

/**
 * * This is for changing the color of the site and store the color in the localStorage of the browser.
 * * And Setting the photo of the about section.
 */

let colorsList = document.querySelectorAll(
  ".settings__content__colors__list li"
);

let myRootElement = document.querySelector(":root").style;

colorsList.forEach((myLi) => {
  myLi.addEventListener("click", (eo) => {
    myRootElement.setProperty("--main-color", eo.target.dataset.color);
    localStorage.setItem("bgColor", eo.target.dataset.color);

    // const aboutArrImages = [
    //   "imgs/svgs/about/man-1.svg",
    //   "imgs/svgs/about/man-2.svg",
    //   "imgs/svgs/about/man-3.svg",
    //   "imgs/svgs/about/man-4.svg",
    //   "imgs/svgs/about/man-5.svg",
    // ];
    // let aboutImgSection = document.querySelector(".about__right img");
    // const getColorFromLocalStorage = localStorage.getItem("bgColor");

    // if (getColorFromLocalStorage !== null) {
    //   aboutImgSection.removeAttribute("src");

    //   if (localStorage.getItem("about_img") === null) {
    //     if (getColorFromLocalStorage === "#3D3349") {
    //       aboutImgSection.setAttribute("src", aboutArrImages[0]);
    //       localStorage.setItem("about_img", aboutArrImages[0]);
    //     } else if (getColorFromLocalStorage === "#e76f51") {
    //       aboutImgSection.setAttribute("src", aboutArrImages[1]);
    //       localStorage.setItem("about_img", aboutArrImages[1]);
    //     } else if (getColorFromLocalStorage === "#0077b6") {
    //       aboutImgSection.setAttribute("src", aboutArrImages[2]);
    //       localStorage.setItem("about_img", aboutArrImages[2]);
    //     } else if (getColorFromLocalStorage === "#073b4c") {
    //       aboutImgSection.setAttribute("src", aboutArrImages[3]);
    //       localStorage.setItem("about_img", aboutArrImages[3]);
    //     } else if (getColorFromLocalStorage === "#2ec4b6") {
    //       aboutImgSection.setAttribute("src", aboutArrImages[4]);
    //       localStorage.setItem("about_img", aboutArrImages[4]);
    //     }

    //      localStorage.setItem("about_img", aboutImgSection.getAttribute("src"));
    //      console.log(localStorage.getItem("about_img"));
    //   } else {
    //     aboutImgSection.setAttribute("src", localStorage.getItem("about_img"));
    //   }
    // } else {
    //   aboutImgSection.removeAttribute("src");
    //   aboutArrImages.setAttribute("src", aboutArrImages[0]);
    //   aboutImgSection.setAttribute("src", localStorage.getItem("about_img"));
    // }

    // * Remove active class.
    eo.target.parentElement.querySelectorAll(".active").forEach((item) => {
      item.classList.remove("active");
    });

    // * Add active class.
    eo.target.classList.add("active");
  });
});

/**
 * * Check if the localStorage has color in it or not and setting the photo of the about section.
 */

if (localStorage.getItem("bgColor") !== null) {
  myRootElement.setProperty("--main-color", localStorage.getItem("bgColor"));

  colorsList.forEach((item) => {
    item.classList.remove("active");

    if (item.dataset.color === localStorage.getItem("bgColor")) {
      item.classList.add("active");
    }
  });
}

/**
 * * We put the background changing randomly codes in the header-script.js with it for good reading file.
 * * To collect the codes in one place.
 */
