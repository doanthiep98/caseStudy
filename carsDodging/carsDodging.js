var character=document.getElementById("character");
var block=document.getElementById("block");
var counter=0;

function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function (){
        character.classList.remove("animate");
    },500)
}

var checkDead = setInterval(function (){
    var characterTop =parseInt( window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft =parseInt( window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<80 && blockLeft>0 && characterTop>=415){
        block.style.animation= "none";
        alert("GAME OVER! Your score is:"+Math.floor(counter/100));
        counter=0;
        block.style.animation= "block 1500ms infinite linear";
    }
        else{
            counter++;
            document.getElementById("scoreSpan").innerHTML=Math.floor(counter/100);
    }
},15)

