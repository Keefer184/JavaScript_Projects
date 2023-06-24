//Concatenate Method
function codeConcat(){
    var Part1="Coding is difficult, ";
    var Part2="but it is fun once you get the hang of it! ";
    var Part3="Like now, I am trying";
    var Part4=" to concatenate strings from a list, instead of predefined variables!";
    var Whole_Statement=Part1.concat(Part2,Part3,Part4);
    document.getElementById('conc').innerHTML= Whole_Statement; //using id in li did not seem to work, so resorted to predefined var :(
}

function slice1(){
    var sentence="There is a number of I's in \"Team\"!";
    var section=sentence.slice(0,8)+sentence.slice(10,12)+sentence.slice(18,19)+sentence.slice(20,22)+sentence.slice(24,35);
    document.getElementById('slice_1').innerHTML=section.toUpperCase(); //Changed slices to upper case!
}

//Search Methods
function iInTeam(){
    var Team="Team";
    var iTeam=Team.search('i');
    document.getElementById('i_search').innerHTML=iTeam+" Which means there is no position in TEAM where there is an i";
}

function meInTeam(){
    var Team="Team";
    var m=Team.search('m');
    var e=Team.search('e');
    document.getElementById('me_search').innerHTML="The "+m+" and "+e+" elements spell \"me\".... uh oh..";
}

//toString Method
function numToString(){
    var X=184;
    document.getElementById("num_to_string").innerHTML=X.toString()+" Ta DAAAA!!!!!..... wait.. did that even do anything?";
}

//valueOf Method
function valueMethod(){
    var A=184;
    document.getElementById('value_1').innerHTML=A.valueOf();
    document.getElementById('value_2').innerHTML=(184).valueOf();
    document.getElementById('value_3').innerHTML=(100+84).valueOf();
}

//toPrecision
function piToSeven(){
    var Y=Math.PI;
    document.getElementById('pi_to_seven').innerHTML=Y.toPrecision(7);
}

//toFixed Method
function piFixed(){
    var Z=Math.PI;
    document.getElementById('pi_fixed').innerHTML=Z.toFixed(6)+" Yep, looks like either method will produce the same thing!";
}