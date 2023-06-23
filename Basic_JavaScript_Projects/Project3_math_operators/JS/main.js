function addition(){ //Addition Function
    var num_1=Number(document.getElementById("Num1").value);
    var num_2=Number(document.getElementById("Num2").value);
    var eq_1=Number(num_1+num_2);
    document.getElementById("math_1").innerHTML=num_1+" + "+num_2+" = "+eq_1;
}

function subtraction(){ //Subtraction Function
    var num_1=Number(document.getElementById("Num1").value);
    var num_2=Number(document.getElementById("Num2").value);
    var eq_2=Number(num_1-num_2);
    document.getElementById("math_2").innerHTML=num_1+" - "+num_2+" = "+eq_2;
}

function multiplication(){ //Multiplication Function
    var num_1=Number(document.getElementById("Num1").value);
    var num_2=Number(document.getElementById("Num2").value);
    var eq_3=Number(num_1*num_2);
    document.getElementById("math_3").innerHTML=num_1+" * "+num_2+" = "+eq_3;
}

function division(){ //Division with Modulus Function
    var num_1=Number(document.getElementById("Num1").value);
    var num_2=Number(document.getElementById("Num2").value);
    var eq_4=Number(num_1/num_2);
    document.getElementById("math_4").innerHTML=num_1+" / "+num_2+" = "+eq_4;
    var eq_5=Number(num_1%num_2);
    document.getElementById("math_6").innerHTML="When you divide "+num_1+" by "+num_2+" you get a remainder of "+eq_5;
}

function orderOfOperations(){ //Multiple operations function
    var num_1=Number(document.getElementById("Num1").value);
    var num_2=Number(document.getElementById("Num2").value);
    var eq_1=Number(num_1+num_2);
    var eq_2=Number(num_1-num_2);
    var eq_3=Number(num_1*num_2);
    var eq_4=Number(num_1/num_2);
    var order_of_op=Number(((eq_1+eq_2)-(eq_3+eq_4))/4);
    console.log(order_of_op);
    document.getElementById("math_5").innerHTML=order_of_op;
}

function negation(){ //Negation function
    var num_1=Number(document.getElementById("Num1").value);
    var num_2=Number(document.getElementById("Num2").value);
    document.getElementById("math_7").innerHTML=-num_1+" and "+-num_2;
}

function incUp(){ //Increment Function
    var num_1=Number(document.getElementById("Num1").value);
    var num_2=Number(document.getElementById("Num2").value);
    num_1++;
    num_2++;
    document.getElementById("math_8").innerHTML=num_1+" and "+num_2;
}

function incDown(){ //Decrement Function
    var num_1=Number(document.getElementById("Num1").value);
    var num_2=Number(document.getElementById("Num2").value);
    num_1--;
    num_2--;
    document.getElementById("math_9").innerHTML=num_1+" and "+num_2;
}

function rando(){  //Random Number Generator between 0 and 100 (Using Math Object and Math Object Method)
    window.alert(Math.random()*100);
}

function sqrt(){  //Square Root Function (Using Math Object and Math Object Method)
    var num_1=Number(document.getElementById("Num1").value);
    var num_2=Number(document.getElementById("Num2").value);
    var sqrt_1=Math.sqrt(num_1);
    var sqrt_2=Math.sqrt(num_2);
    document.getElementById("sqrt").innerHTML=sqrt_1+" and "+sqrt_2;
}

function squared(){  //Numbers to the power of 2 Function (Using Math Object and Math Object Method)
    var num_1=Number(document.getElementById("Num1").value);
    var num_2=Number(document.getElementById("Num2").value);
    var sqrd_1=Math.pow(num_1,2);
    var sqrd_2=Math.pow(num_2,2);
    document.getElementById("sqrd").innerHTML=sqrd_1+" and "+sqrd_2;
}