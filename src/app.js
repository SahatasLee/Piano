
//console.dir(document);
//console.log(document);
console.log("Hello world!");

//let element = document.getElementById("A");
//let audio = document.getElementById("track");

document.addEventListener("keydown", function (event) {
    let test = "key/" + event.key + "-3.mp3"
    console.log(test);
    if(event.code == "KeyA"){
         console.log("The 'A' key is pressed.");
         let audio = new Audio(test)
         audio.load();
         audio.play();
     }
     else if(event.code == "KeyS"){
         console.log("The 'S' key is pressed.");
         let audio = new Audio("key/f-3.mp3")
         audio.play();
     }
     else if(event.code == "KeyD"){
         console.log("The 'D' key is pressed.");
         let audio = new Audio("key/f-4.mp3")
         audio.play();
     }
     else if(event.code == "KeyF"){
         console.log("The 'F' key is pressed.");
         let audio = new Audio("key/f-5.mp3")
         audio.play();
     }
     else if(event.code == "KeyG"){
         console.log("The 'G' key is pressed.");
         let audio = new Audio("key/g-3.mp3")
         audio.play();
     }
     else if(event.code === "KeyH"){
         console.log("The 'H' key is pressed.");
         let audio = new Audio("key/g-4.mp3")
         audio.play();
     }
     else if(event.code === "KeyJ"){
         console.log("The 'J' key is pressed.");
         let audio = new Audio("key/g-5.mp3")
         audio.play();
     }
    else if(event.code === "KeyW"){
        console.log("The 'W' key is pressed.");
        let audio = new Audio("key/W.mp3")
        audio.load();
        audio.play();
    }
    else if(event.code === "KeyE"){
        console.log("The 'E' key is pressed.");
        let audio = new Audio("key/E.mp3")
        audio.load();
        audio.play();
    }
    else if(event.code === "KeyT"){
        console.log("The 'T' key is pressed.");
        let audio = new Audio("key/T.mp3")
        audio.load();
        audio.play();
    }
    else if(event.code === "KeyY"){
        console.log("The 'Y' key is pressed.");
        let audio = new Audio("key/Y.mp3")
        audio.load();
        audio.play();
    }
    else if(event.code === "KeyU"){
        console.log("The 'U' key is pressed.");
        let audio = new Audio("key/U.mp3")
        audio.load();
        audio.play();
    }
     else{
         console.log("Warning");
     }

})

