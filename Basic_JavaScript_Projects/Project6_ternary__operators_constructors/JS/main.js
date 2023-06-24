//Ternary Operations
function rideFunction(){
    var Height, Can_Ride;
    Height=document.getElementById("height").value;
    Can_Ride=(Height<52)?"You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_Ride+" to ride."; 
}

function voteFunction(){
    var Age, Can_Vote;
    Age=document.getElementById("age").value;
    Can_Vote=(Age<18)?"You are NOT":"You are";
    document.getElementById("vote").innerHTML=Can_Vote+" old enough to vote."; 
}

//Object Constructor Function - Example
function Vehicle(Make,Model,Year,Color){
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge","Viper",2020,"Red");
var Emily=new Vehicle("Jeep","Trail Hawk",2019,"White and Red");
var Erik=new Vehicle("Ford","Pinto",1971,"Mustard");
function myFunction(){
    document.getElementById('Keywords_and_Constructors').innerHTML="Emily drives a "+Emily.Vehicle_Color+"-colored "+Emily.Vehicle_Model+" manufactured in "+Emily.Vehicle_Year+".";
}

//Testing to assign input values to a new object function 
function testFunction(){
    var Name_Input=document.getElementById('Name').value;
    var V_Make_Input=document.getElementById('V_Make').value;
    var V_Model_Input=document.getElementById('V_Model').value;
    var V_Year_Input=document.getElementById('V_Year').value;
    var V_Color_Input=document.getElementById('V_Color').value;
    var Test=new Vehicle(V_Make_Input,V_Model_Input,V_Year_Input,V_Color_Input);
    document.getElementById('New_and_This').innerHTML="Ok, "+Name_Input+", so you drive a "+Test.Vehicle_Color+"-colored "+Test.Vehicle_Make+" "+Test.Vehicle_Model+" which was manufactured in "+Test.Vehicle_Year+".";
}
//Object Constructor Function - New attempt
function Doggy(Name,Breed,Age,Color){
    this.Dog_Name=Name;
    this.Dog_Breed=Breed;
    this.Dog_Age=Age;
    this.Dog_Color=Color;
}
//Assigning input to new object function from newly made constructor function
function goodDoggy(){
    var DogName=document.getElementById('DName').value;
    var DogBreed=document.getElementById('DBreed').value;
    var DogAge=document.getElementById('DAge').value;
    var DogColor=document.getElementById('DColor').value;
    var MyDog=new Doggy(DogName,DogBreed,DogAge,DogColor);
    document.getElementById('Dog_Info').innerHTML="Ok, so you have a "+MyDog.Dog_Age+" year old "+MyDog.Dog_Breed+" named "+MyDog.Dog_Name+" and whose color is "+MyDog.Dog_Color+".";
}

//Nested Function
function countdown(){
    document.getElementById('Nested_Function').innerHTML=Count();
    function Count(){
        var Start_Point=10;
        function Minus_1(){Start_Point-=1;}
        Minus_1();
        return Start_Point;
    }
}