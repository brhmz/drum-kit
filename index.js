//The first user-interactive project 
//I did when I started listening to 
//UDEMY trainer Angela Yu's tutorials.

//Defining that selects instruments as buttons.
var button = document.querySelectorAll("button");

for (let i = 0; i < button.length; i++) {

    //Loop describing the sound and animation functions 
    //when instruments are touched.
    button[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

//Identification that triggers sound and 
//animation functions by detecting 
//the instrument touched by the user.
document.addEventListener("keypress", function (event) {
    makeSound(event.key)
    buttonAnimation(event.key);
})

//Function that plays instrument sounds.
function makeSound(key) {
    switch (key) {
        case "w":
            var wSound = new Audio("sounds/snare.mp3");
            wSound.play();
            console.log(key);
            break;

        case "a":
            var aSound = new Audio("sounds/kick-bass.mp3");
            aSound.play();
            console.log(key);
            break;

        case "s":
            var sSound = new Audio("sounds/crash.mp3");
            sSound.play();
            console.log(key);
            break;

        case "d":
            var dSound = new Audio("sounds/tom-1.mp3");
            dSound.play();
            console.log(key);
            break;

        case "j":
            var jSound = new Audio("sounds/tom-2.mp3");
            jSound.play();
            console.log(key);
            break;

        case "k":
            var kSound = new Audio("sounds/tom-3.mp3");
            kSound.play();
            console.log(key);
            break;

        case "l":
            var lSound = new Audio("sounds/tom-4.mp3");
            lSound.play();
            console.log(key);
            break;

        default:
            break;
    }
}

//Function that plays button animations.
function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    },
        100);
}
