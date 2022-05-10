let msgContact = document.getElementById("msgContact");
let submit = document.getElementById("submit");

submit.addEventListener(
  "click",
  (e) => {
    if (msgContact.value.trim().length === 0) {
      e.preventDefault();
      msgContact.style.borderColor = "red";
    } else {
      msgContact.style.borderColor = "rgba(163, 163, 163, 0.226)";
      e.returnValue = true;
    }
  },
  false
);
