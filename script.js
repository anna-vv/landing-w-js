// setting variables
const modal = document.querySelectorAll(".modal");
const closeBtn = document.querySelectorAll(".close");
const modalLink = document.querySelectorAll(".modalLink");

// adding event listeners
for (i = 0; i < modalLink.length; i++) {
  modalLink[i].addEventListener("click", showModal(i));
  closeBtn[i].addEventListener("click", closeModalBtn(i));
  window.addEventListener("click", closeModal(i));
}

// declaring functions
function showModal(i) {
  return function(e) {
    modal[i].style.display = "block";
    e.preventDefault();
  };
}

function closeModalBtn(i) {
  return function() {
    modal[i].style.display = "none";
  };
}

function closeModal(i) {
  return function(e) {
    if (e.target === modal[i]) {
      modal[i].style.display = "none";
    }
  };
}

// sign up / sign in toggle / open / close

document.getElementById("openSignin").addEventListener("click", openForm);

document.getElementById("signup-link").addEventListener("click", function() {
  document.getElementById("signupForm").style.display = "block";
  document.getElementById("signinForm").style.display = "none";
});

document.getElementById("signin-link").addEventListener("click", function() {
  document.getElementById("signinForm").style.display = "block";
  document.getElementById("signupForm").style.display = "none";
});

document.getElementById("closeSignin").addEventListener("click", closeForm);
document.getElementById("closeSignup").addEventListener("click", closeForm);

function openForm() {
  document.getElementById("signin").style.display = "block";
}

function closeForm() {
  document.getElementById("signin").style.display = "none";
}
