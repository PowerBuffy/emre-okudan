const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/top-cloud.png") {
    myImage.setAttribute("src", "images/bottom-cloud.png");
  } else {
    myImage.setAttribute("src", "images/top-cloud.png");
  }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = "I'm Emre, Welcome " + myName + "!";
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = "I'm Emre, Welcome " + storedName + "!";
}

myButton.onclick = function() {
  setUserName();
};
