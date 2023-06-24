//Global Var predefined
var x=Math.PI;
function Add_1(){
    console.log(x+100);
    document.getElementById('Global_Return_1').innerHTML=(x+100);
} 
function Add_2(){
    console.log(x+200);
    document.getElementById('Global_Return_2').innerHTML=(x+200);
} 

//Local Var from input
function Add_3(){
    var y=Number(document.getElementById('Num_2').value);//Local Variable
    console.log(y+30);
    document.getElementById('Local_Return_1').innerHTML=y+30;
}

function Add_4(){
    console.log(y+40);  //Fails since y not defined because it was local to Add_3
    document.getElementById('Local_Return_2').innerHTML=y+40;
}

//Conditional Statements
function New_Time(){
    Time=new Date().getHours()
    if (Time<17){
       Progress ="Keep going strong and working hard!";
    }
    else {
        Progress ="Time for a break!";
    }
    document.getElementById('Current_Time').innerHTML=Progress
}

function ageCheck(){
    Age=document.getElementById('Age_Input').value; //If does not work, try Number
    if (Age<21){
        Age_Check="You are not old enough to drink.  Your body can wait!";
    }
    else{
        Age_Check="You are old enough!  Please drink responsibly and DO NOT DRIVE!";
    }
    document.getElementById('old_enough').innerHTML=Age_Check;
}

function Time_Function(){
    var Time=new Date().getHours();
    var Reply;
    if (Time<12==Time>0){
        Reply="It is morning time!";
    }
    else if (Time>=12==Time<18){
        Reply="It is afternoon.";
    }
    else if (Time>=18==Time<21){
        Reply="It is evening time";
    }
    else{
        Reply="It is nighttime";
    }
    document.getElementById('Time_of_Day').innerHTML=Reply;
}