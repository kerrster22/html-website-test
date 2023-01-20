let myName;
let temperature;
let temp;
let color;
function getName() {
  myName = prompt("what is your name(a-z)");

  if (myName) {
    console.log("hello " + myName);
  } else {
    console.log("hello " + myName);
  }
}
getName();

function ChangeColor() {
  color = prompt("what color");
  document.body.style.backgroundColor = color;
}
ChangeColor();

function whatsTheTemp() {
  temperature = prompt("what is the temperature(0-100)");
  temp;

  if (temperature <= 7) {
    temp = "wow that is cold " + temperature + "°";
  } else if (temperature <= 35) {
    temp = "wow is going to be a warm one today " + temperature + "°";
  } else if (temperature <= 101) {
    temp = "it is an oven outside! " + temperature + "°";
  }
}
whatsTheTemp();

document.write(myName + " " + temperature + " °");

confirm("have you answered everything ?");
