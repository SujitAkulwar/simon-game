var string = ""; 
var ans;
var counter=0;
function start(){
    counter = 0;
    string = "";
    game();
}

function fun(i){
    
    if(i==string[-1]){
        counter++;
        $("h1").text(counter);
        console.log(i);
    }
    else{
        $("h1").text("score = "+counter);
    }
    game();
}

function game(){
    ans = Math.floor(Math.random()*4);
    string += ans;
    Play(ans);
}

function Play(ans){
    if(ans==0){
        setTimeout(function(){ $(".red").css("background-color", "red");},500);
        var red_sound = document.createElement("audio");
        red_sound.src="red.mp3";
        red_sound.autoPlay=false;
        red_sound.preLoad=true;       
        red_sound.play();
        $(".red").css("background-color", "pink");
    }
    else if(ans==1){
        setTimeout(function(){$(".yellow").css("background-color", "yellow");},500);
        var y_sound = document.createElement("audio");
        y_sound.src="yellow.mp3";
        y_sound.autoPlay=false;
        y_sound.preLoad=true;       
        y_sound.play();
        $(".yellow").css("background-color", "gray");
    }
    else if(ans==2){
        setTimeout(function(){ $(".green").css("background-color", "green");},500);
        var g_sound = document.createElement("audio");
        g_sound.src="green.mp3";
        g_sound.autoPlay=false;
        g_sound.preLoad=true;       
        g_sound.play();
        $(".green").css("background-color", "purple");
    }
    else{
        setTimeout(function(){ $(".blue").css("background-color", "blue");},500);
        var b_sound = document.createElement("audio");
        b_sound.src="blue.mp3";
        b_sound.autoPlay=false;
        b_sound.preLoad=true;       
        b_sound.play();
        $(".blue").css("background-color", "skyblue");
    }
}

