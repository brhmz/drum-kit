
button = document.querySelectorAll("button");

for (let i = 0; i < button.length; i++) {
    
    button[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML)
     
    })
}  



document.addEventListener("keypress", function(event) {
    makeSound(event.key)
})

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