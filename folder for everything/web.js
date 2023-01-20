//let myName;
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

function getRating() {
  let rate = prompt("Please rate the site 0-10");
  let output = "your rating";

  for (let i = 0; i < rate; i++) {
    output =
      output +
      "<img src='./film-reel.png' class = 'film-reel' width = 25px height = 25px />";
  }
  document.write(output);
}
function guessPassword() {
  let answer;

  while (answer != 1234) {
    answer = prompt("Guess the password 0-9");

    if (answer != 1234) {
      alert("Nice try Hint=1+2+3+4*100+1+2+3+4+90+100+30+4");
    } else {
      alert("Welldone you cracked the code ENTER AT YOUR OWN RISK!");
      document.write("             Welldone :)");
    }
  }
}
