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
 */

let colorsList = document.querySelectorAll(
  ".settings__content__colors__list li"
);

let myRootElement = document.querySelector(":root").style;

colorsList.forEach((myLi) => {
  myLi.addEventListener("click", (eo) => {
    myRootElement.setProperty("--main-color", eo.target.dataset.color);
    localStorage.setItem("bgColor", eo.target.dataset.color);

    // * Remove active class.
    eo.target.parentElement.querySelectorAll(".active").forEach((item) => {
      item.classList.remove("active");
    });

    // * Add active class.
    eo.target.classList.add("active");
  });
});

/**
 * * Check if the localStorage has color in it or not.
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
