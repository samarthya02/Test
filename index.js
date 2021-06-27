function handleclick(){
    var t = this.textContent;
    makesound(t);
    pressedkey(t);
}

for(var i = 0 ; i < 7 ; i++ ){
    document.getElementsByClassName("drum")[i].addEventListener("click" , handleclick);
    


}

document.addEventListener("keydown" , function(event){
    makesound(event.key);
    pressedkey(event.key);
})



function makesound(key) {

    var audio = new Audio("sounds/"+ key + ".mp3");
    audio.play();

}

function pressedkey(key){
    var active = document.querySelector("."+key)
    active.classList.add("pressed");

    setTimeout(function(){
        active.classList.remove("pressed");
    },100)

}

