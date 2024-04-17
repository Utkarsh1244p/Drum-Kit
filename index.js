for(var i=0; i<document.querySelectorAll(".drum").length ; i++){
    //FUNCTION TO GRAB USER'S RESPONSE WHEN THEY CLICKED ON DRUMS BUTTONS WITH MOUSE CLICKS
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        // console.log(this.innerHTML)
        var buttonInnerHTML = this.innerHTML

        //Functions to make sound and show button animation when clicked
        makeSound(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML)

    })
}


//FUNCTION TO GRAB THE USER'S RESPONSE THROUGH KEY PRESSED
document.addEventListener("keydown", function(event){
    // console.log(event)
    // console.log(event.isTrusted)
    
    //Functions to make sound and show button animation when clicked
    makeSound(event.key)
    buttonAnimation(event.key)
})


// THE FUNCTION TO MAKE SOUND ON THE BASIS OF KEY PRESSED OR CLICKED BY MOUSE
function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play()   
        break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play()
        break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play()
        break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play()
        break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play()
        break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play()
        break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play()
        break;    
        default:
            console.log(buttonInnerHTML)
        break;
    }

    // CODE IF YOU WANNA TRY ABOVE SWITCH IN IF ELSE IF FORM
       
        // if(this.innerHTML == "w"){
        //     var tom1 = new Audio("sounds/tom-1.mp3");
        //     tom1.play()
        // }
        // else if(this.innerHTML == "a"){
        //     var tom2 = new Audio("sounds/tom-2.mp3");
        //     tom2.play()
        // }
        // else if(this.innerHTML == "s"){
        //     var tom3 = new Audio("sounds/tom-3.mp3");
        //     tom3.play()
        // }
        // else if(this.innerHTML == "d"){
        //     var tom4 = new Audio("sounds/tom-4.mp3");
        //     tom4.play()
        // }
        // else if(this.innerHTML == "j"){
        //     var snare = new Audio("sounds/snare.mp3");
        //     snare.play()
        // }
        // else if(this.innerHTML == "k"){
        //     var crash = new Audio("sounds/crash.mp3");
        //     crash.play()
        // }
        // else if(this.innerHTML == "l"){
        //     var kick = new Audio("sounds/kick-bass.mp3");
        //     kick.play()
        // }
        // else{
        //     console.log(this.innerHTML)
        // }
    
}


//FUNCTION TO ADD ANIMATION TO BUTTON WHEN THEY CLICKED 
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    //setTimeout function to remove 'pressed' class from classList of activeButton
    setTimeout( function(){
        activeButton.classList.remove("pressed")}, 300)
}
