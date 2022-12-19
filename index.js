
// get number of drums from html file
var numberOfDrum = document.querySelectorAll(".drum").length;

// loop through all the drums

for (var i = 0; i < numberOfDrum; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        // get text information from button using this

       var buttomInnerHTML = this.innerHTML;
       makeSound(buttomInnerHTML);

       // make key animation
       keyboardAnimation(buttomInnerHTML);

    });
}


   // keyboard events

   document.addEventListener("keypress", function(events){

    makeSound(events.key);
    // make key animation

    keyboardAnimation(events.key);


   });

  // create make sound function

   function makeSound(keyboard){

    switch(keyboard){
        case "w":{
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        }
        case "a":{
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        }
        case "s":{
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        }
        case "d":{
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        }
        case "j":{
            var snare = new Audio("sounds/snare.mp3");
            snare .play();
            break;
        }
        case "l":{
            var kick = new Audio("sounds/kick-bass.mp3");
            kick .play();
            break;
        }
        case "k":{
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
        }
        default: console.log(keyboard);

   }

   }

   // create keyboard animation function

   function keyboardAnimation (currentKey){

    // using querrySelector to retrieve a key

    var key = document.querySelector("."+currentKey);

    // add this function to Java Script to make key animation
    key.classList.add("pressed");

    // set time out to a function wait and remove the previous function

    setTimeout(function(){
        key.classList.remove("pressed")
    }, 150);
    

   }
   