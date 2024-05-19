// Grid Modal
var gridModal = document.getElementById("grid-modal");
var gridBtn = document.getElementById("grid-modal-btn");
var gridSpan = document.getElementsByClassName("grid-modal-close")[0];
gridBtn.onclick = function() {
  gridModal.style.display = "block";
}
  gridSpan.onclick = function() {
  gridModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == gridModal) {
    gridModal.style.display = "none";
  }
}
// Footer Button Modals
// Button Zero
var footerModalZero = document.getElementById("footer-modal-zero");
var footerModalBtnZero = document.getElementById("footer-modal-btn-zero");
var footerModalSpanZero = document.getElementsByClassName("footer-modal-close-zero")[0];
footerModalBtnZero.onclick = function() {
  footerModalZero.style.display = "block";
}
footerModalSpanZero.onclick = function() {
  footerModalZero.style.display = "none";
}
// Button One
var footerModalOne = document.getElementById("footer-modal-one");
var footerModalBtnOne = document.getElementById("footer-modal-btn-one");
var footerModalSpanOne = document.getElementsByClassName("footer-modal-close-one")[0];
footerModalBtnOne.onclick = function() {
  footerModalOne.style.display = "block";
}
footerModalSpanOne.onclick = function() {
  footerModalOne.style.display = "none";
}
// Button Two
var footerModalTwo = document.getElementById("footer-modal-two");
var footerModalBtnTwo = document.getElementById("footer-modal-btn-two");
var footerModalSpanTwo = document.getElementsByClassName("footer-modal-close-two")[0];
footerModalBtnTwo.onclick = function() {
  footerModalTwo.style.display = "block";
}
footerModalSpanTwo.onclick = function() {
  footerModalTwo.style.display = "none";
}
// Button Three
var footerModalThree = document.getElementById("footer-modal-three");
var footerModalBtnThree = document.getElementById("footer-modal-btn-three");
var footerModalSpanThree = document.getElementsByClassName("footer-modal-close-three")[0];
footerModalBtnThree.onclick = function() {
  footerModalThree.style.display = "block";
}
footerModalSpanThree.onclick = function() {
  footerModalThree.style.display = "none";
}
// Button Four
var footerModalFour = document.getElementById("footer-modal-four");
var footerModalBtnFour = document.getElementById("footer-modal-btn-four");
var footerModalSpanFour = document.getElementsByClassName("footer-modal-close-four")[0];
footerModalBtnFour.onclick = function() {
  footerModalFour.style.display = "block";
}
footerModalSpanFour.onclick = function() {
  footerModalFour.style.display = "none";
}
// Button Five
var footerModalFive = document.getElementById("footer-modal-five");
var footerModalBtnFive = document.getElementById("footer-modal-btn-five");
var footerModalSpanFive = document.getElementsByClassName("footer-modal-close-five")[0];
footerModalBtnFive.onclick = function() {
  footerModalFive.style.display = "block";
}
footerModalSpanFive.onclick = function() {
  footerModalFive.style.display = "none";
}
// Button Six
var footerModalSix = document.getElementById("footer-modal-six");
var footerModalBtnSix = document.getElementById("footer-modal-btn-six");
var footerModalSpanSix = document.getElementsByClassName("footer-modal-close-six")[0];
footerModalBtnSix.onclick = function() {
  footerModalSix.style.display = "block";
}
footerModalSpanSix.onclick = function() {
  footerModalSix.style.display = "none";
}
// Button Seven
var footerModalSeven = document.getElementById("footer-modal-seven");
var footerModalBtnSeven = document.getElementById("footer-modal-btn-seven");
var footerModalSpanSeven = document.getElementsByClassName("footer-modal-close-seven")[0];
footerModalBtnSeven.onclick = function() {
  footerModalSeven.style.display = "block";
}
footerModalSpanSeven.onclick = function() {
  footerModalSeven.style.display = "none";
}
// If user clicks outside of modal close the modal
window.onclick = function(eventZero) {
  if (eventZero.target == footerModalZero) {
    footerModalZero.style.display = "none";
  }
  else if (eventZero.target == footerModalOne) {
    footerModalOne.style.display = "none";
  }
  else if (eventZero.target == footerModalTwo) {
    footerModalTwo.style.display = "none";
  }
  else if (eventZero.target == footerModalThree) {
    footerModalThree.style.display = "none";
  }
  else if (eventZero.target == footerModalFour) {
    footerModalFour.style.display = "none";
  }
  else if (eventZero.target == footerModalFive) {
    footerModalFive.style.display = "none";
  }
  else if (eventZero.target == footerModalSix) {
    footerModalSix.style.display = "none";
  }
  else if (eventZero.target == footerModalSeven) {
    footerModalSeven.style.display = "none";
  }
}