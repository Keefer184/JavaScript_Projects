function myFirstFunction(){
    var str="This is button text!";
    document.getElementById('Button_Text').innerHTML=str;
    var test="And this is how scripting can chage your document!";
    document.getElementById("Title").innerHTML=test;
}
function myFunction(){
    var sent="I am learning";
    sent +=" a lot from this course";
    document.getElementById("concatenate").innerHTML=sent;
}
function getName(){
    var Name=document.getElementById("Fname").value;
    console.log(Name);
    document.getElementById("output").innerHTML="Hello "+Name+" how are you today?";
}