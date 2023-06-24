function checkType(){  //type of
    document.write(typeof 10);  //Overwrites the page on click
    document.write(" \'Refresh the page to return to the original html document.\'"); //Instructions to return to the main index.
}

function typeCoercion(){  //type coercion
    document.getElementById('ex2').innerHTML=("Who dunnit"+3);
}

function myFunction(){  //NaN
    document.getElementById('test_1').innerHTML=0/0;
}

function nanCheck1(){  //isNaN True
    document.getElementById('test_2').innerHTML=isNaN('three thousand');
}

function nanCheck2(){  //isNaN False
    document.getElementById('test_3').innerHTML=isNaN(3000);
}

function posInf(){  //Infinity
    document.getElementById('inf_1').innerHTML=2E308;
}

function negInf(){  //neg Infinity
    document.getElementById('inf_2').innerHTML=-2E308;
}

//Boolean

function bool1(){
    console.log(6>3);
    document.getElementById('Boolean_1').innerHTML=6>3;
}

function bool2(){
    console.log(6<3);
    document.getElementById('Boolean_2').innerHTML=6<3;
}

//Boolean with AND and OR

function bool3(){
    console.log(6>3&&7<8);
    document.getElementById('Boolean_3').innerHTML=(6>3&&7<8);
}

function bool4(){
    console.log(6>3&&7>8);
    document.getElementById('Boolean_4').innerHTML=(6>3&&7>8);
}

function bool5(){
    console.log(6<3||7>8);
    document.getElementById('Boolean_5').innerHTML=(6<3||7>8);
}

function bool6(){
    console.log(6<3||7<8);
    document.getElementById('Boolean_6').innerHTML=(6<3||7<8);
}
//Boolean Not

function notFunction1(){
    document.getElementById('Not_1').innerHTML=!(7>8);
}

function notFunction2(){
    document.getElementById('Not_2').innerHTML=!(7<8);
}

function consLog(){  //Console Log Check//
    console.log(3+3);
    var x=3+3;
    document.getElementById('conslog').innerHTML=x;
}

//== T/F

function numCheck1(){
    document.getElementById('numcheck1').innerHTML=(5==5);
}

function numCheck2(){
    document.getElementById('numcheck2').innerHTML=(-5==5);
}

//=== T/F

function valCheck1(){
    document.getElementById('valcheck1').innerHTML=("Brian"==="Brian")+" of course!";
}

function valCheck2(){
    document.getElementById('valcheck2').innerHTML=("Baseball"===9)+" That is just silly.  How can a game be the same as a number..";
}
function valCheck3(){
    document.getElementById('valcheck3').innerHTML=(10==="Ten")+" In our minds, it is true, but because they are different data types, to JS they are not...";
}

function valCheck4(){
    document.getElementById('valcheck4').innerHTML=("Brian"==="Jimmy")+" How would you even go about trying to rationalize this????";
}
