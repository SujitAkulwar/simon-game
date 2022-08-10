var string = ""; 
var ans;
function start(){
    string = "";
    game();
}

function fun(i){

    game();
}

function game(){
    ans = Math.floor(Math.random()*4);
    string += ans;
    Play(ans);
}

function Play(ans){
    if(ans==0){
        $(".red").css("background-color", "pink");
        var red_sound = document.createElement("audio");
        red_sound.src="red.mp3";
        red_sound.autoPlay=false;
        red_sound.preLoad=true;       
        red_sound.play();
    }
    else if(ans==1){
        $(".yellow").css("background-color", "gray");
        var y_sound = document.createElement("audio");
        y_sound.src="yellow.mp3";
        y_sound.autoPlay=false;
        y_sound.preLoad=true;       
        y_sound.play();
    }
    else if(ans==2){
        $(".green").css("background-color", "purple");
        var g_sound = document.createElement("audio");
        g_sound.src="green.mp3";
        g_sound.autoPlay=false;
        g_sound.preLoad=true;       
        g_sound.play();
    }
    else{
        $(".blue").css("background-color", "skyblue");
        var b_sound = document.createElement("audio");
        b_sound.src="blue.mp3";
        b_sound.autoPlay=false;
        b_sound.preLoad=true;       
        b_sound.play();
    }
}

