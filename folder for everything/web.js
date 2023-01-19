

function getName () {
    let myName = prompt("what is your name");
    let message;
    if (myName) {
        message = "hello " + myName
    }else {
        message=""
    }
    console.log("hello " + myName) 
}
getName(); 


function ChangeColor () {
    let color = prompt("what color");
    document.body.style.backgroundColor  = color;
}
ChangeColor();


function whatsTheTemp(){
    let temperature = prompt("what is the temperature(0-100)")
    let temp;
    
    if (temperature <= 7) {
        temp = "wow that is cold " + temperature + "°";
    } else if(temperature <= 35) {
        temp = "wow is going to be a warm one today " + temperature + "°";
    } else if(temperature <=101) {
        temp = "it is an oven outside! " + temperature + "°";
    }
 } whatsTheTemp();



document.write(myName + " " + temperature + " °");
confirm("have you answered everything ?");
console.log(temp);