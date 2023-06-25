//While Loop
function callLoop(){
    Timer=""
    var X=10;
    while (X>0){
        Timer += "<br>" + X;
        X--;
    }
    document.getElementById('loop').innerHTML=Timer;
}

//String Length
function stringLength(){
    var Y=document.getElementById('phrase_1').value;
    document.getElementById('string_length').innerHTML = Y.length;
}

//For Loop
var Instruments = ["Guitar","Bass","Drums","Keyboard","Electric Violin","Electric Cello"];
var Content = "";
var Z;

function forLoop(){
    for (Z = 0; Z < Instruments.length; Z++){
        Content += Instruments[Z] + "<br>";
    }    
    document.getElementById('List_of_Instruments').innerHTML=Content;
}

//Array using global var and input
function arrayFunction(){
    var A = document.getElementById('array_choice').value;
    document.getElementById('Array').innerHTML = "Your choice gives the "+ Instruments[A]+ " instrument!";
}

//Const Keyword Assignment
const Blink182={singer:"Tom", guitarist:"Tom", bassist:"Mark", drummer:"Scott"}
function constant_function(){
    Blink182.singer2="Mark";
    Blink182.drummer="Travis";
    document.getElementById('constant').innerHTML = "The singer of the band Blink182 is " + Blink182.singer + " and sometimes " + Blink182.singer2 + " will sing instead.  Their most recent drummer is " + Blink182.drummer + ".";
}

//Using Let
function favNum(){
    const N=document.getElementById('num_choice').value;
    let M=0;
    for (M = 0; M <= N; M++){
        Content += M + "<br>";
    }
    document.getElementById("fav_num").innerHTML=Content;
}

//Using Return
function getName(){
    const N=document.getElementById('name').value;
    function returnName(N){
        return "Hello " + N +"!";
    }
    document.getElementById('name_out').innerHTML=returnName(N);
}

//Creating and Using Objects
function Announce(){
    let Play={
        pitcher:"Shawn Estes",
        batter:"Kenny Lofton",
        catcher:"Joey Bart",
        firstbase: "Will Clark",
        playon: function() {
            return this.pitcher + " serves a pitch to " + this.batter + " who surprisingly lays down a bunt, but " + this.catcher + " is able to chase it down and throw to " + this.firstbase + " securing the out!";
        }
    };
    document.getElementById('impossibleplay').innerHTML=Play.playon();
}

//Using Break
function breakItUp(){
    let text_1="";
    let h=Number(document.getElementById('num_1').value);
    for (let i = 1; i <= 10; i++ ){
        if (i===h){break;}
        text_1 += i + "<br>";
    }
    document.getElementById('stop_num').innerHTML=text_1;
}

//Using Continue
function skipIt(){
    let text_2="";
    let k=Number(document.getElementById('num_1').value);
    for (let g = 1; g <= 10;  g++){
        if (g===k){continue;}
        text_2 += g + "<br>";
    }
    document.getElementById('skip_num').innerHTML=text_2;
}
