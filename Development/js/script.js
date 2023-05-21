// form validation
function Validate(e) {
  let x = document.forms["loginform"]["fname"].value;
  if (x == "") {
    alert("All fields must be filled");
    return false;
    // alert("Name must be filled out");
  } else {
    alert("Submitted");
  }
}

//cart function: on calling a popupwill display and cartnumber will be plus 1

function cart() {
  var cartnumber = document.getElementById("cartspan").innerText;
  cartnumber = Number(cartnumber);
  document.getElementById("cartspan").innerText = cartnumber + 1;
  alert("Added to cart!!");
}

//setting array of banner texts

var bannerTexts = ["Cool camera ", "Beautiful Memories.", "Cool camera,", "Beautiful life"];
var h2banner = document.getElementById("bannertext"); // selecting bannertext id
var index = 0; //setting index to 0
setInterval(slider, 1000);
//function slider
function slider() {
  if (index < bannerTexts.length) {
    index = index + 1; //increasing index by 1
  } else {
    index = 1;
  }
  h2banner.innerText = bannerTexts[index - 1];
}

// form validation for feedback
function Validatefeedback() {
  // // Get the value of the form with name="feedbackform" and input with name "NameF"
  let x = document.forms["feedbackform"]["NameF"].value;
  if (x == "") {
    alert("All fields must be filled");
    return false;
    // alert("Name must be filled out");
  } else {
    alert("done");
  }
}

//photo slider on click html changes
function photochange1() {
  document.getElementById("mainimg").innerHTML = `<img
 style = " object-fit: cover;"
  src = "../images/products/cam1.jpg"
  alt = ""
    /> `;


}
//photo slider on click html changes
function photochange2() {

  console.log("sadsa");
  document.getElementById("mainimg").innerHTML = `<img
 style = " object-fit: cover;"
  src = "../images/products/eos.jpg"
  alt = ""
    /> `;


}
