let mySelectedImage = document.querySelectorAll(".gallary__content img");

// * Create my elements for a popup.
let myOverLay = document.createElement("div");
let myPopup = document.createElement("div");
let myImageInsidePopup = document.createElement("img");
let closeX = document.createElement("i");

mySelectedImage.forEach((img) => {
  img.addEventListener("click", () => {
    myOverLay.className = "overlay";
    document.body.appendChild(myOverLay);
    myPopup.className = "popup";

    myImageInsidePopup.className = "img-popup";
    myImageInsidePopup.src = img.src;

    closeX.className = "fas fa-times";

    myOverLay.append(closeX);

    myPopup.append(myImageInsidePopup);

    myOverLay.append(myPopup);
  });
});

closeX.addEventListener("click", () => {
  myOverLay.classList.add("hide-overlay");
});
