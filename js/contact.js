const contactForm = document.querySelector("#contact--form");
const inputName = document.querySelector("#name");
const inputSubject = document.querySelector("#subject");
const inputAddress = document.querySelector("#address");
const inputEmail = document.querySelector("#email");
const regExEmailCommon = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6})*$/;
const regExEmailUnCommon = /^([a-z0-9_.+-]+)@([da-z.-]+).([a-z.]{2,6})$/;

function validateForm(e) {
  e.preventDefault();
  if (checkLength(inputName.value, 1)) {
    document.querySelector("#error--name").style.display = "none";
  } else {
    document.querySelector("#error--name").style.display = "block";
  }

  if (checkLength(inputSubject.value, 10)) {
    document.querySelector("#error--subject").style.display = "none";
  } else {
    document.querySelector("#error--subject").style.display = "block";
  }
  if (checkLength(address.value, 25)) {
    document.querySelector("#error--address").style.display = "none";
  } else {
    document.querySelector("#error--address").style.display = "block";
  }
  if (
    (regExEmailCommon.test(inputEmail.value) &&
      checkLength(inputEmail.value, 1)) ||
    (regExEmailUnCommon.test(inputEmail.value) &&
      checkLength(inputEmail.value, 1))
  ) {
    document.querySelector("#error--email").style.display = "none";
  } else {
    document.querySelector("#error--email").style.display = "block";
  }
}

function checkLength(string, length) {
  if (string.trim().length >= length) {
    return true;
  } else {
    return false;
  }
}

contactForm.addEventListener("submit", validateForm);
