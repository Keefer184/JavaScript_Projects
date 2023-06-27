function getReceipt(){
    var text1="<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName('size');
    for (var i = 0; i < sizeArray.length; i++){
        if (sizeArray[i].checked){
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Chihuahua"){
        sizeTotal = 6;
    }
    else if (selectedSize === "Beagle"){
        sizeTotal = 8;
    }
    else if (selectedSize === "Labrador"){
        sizeTotal = 10;
    }
    else if (selectedSize === "Great Dane"){
        sizeTotal = 14;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + "= $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getCheese(runningTotal,text1); /*May need some adjustment here*/
};

function getCheese(runningTotal,text1){
    var cheeseTotal = 0;
    var cheeseArray = document.getElementsByClassName('cheese');
    for(var j = 0; j < cheeseArray.length; j++){
        if (cheeseArray[j].checked){
            var selectedCheese = cheeseArray[j].value;
            text1 = text1 + selectedCheese + "<br>" 
        }
    }
    if (selectedCheese === 'Light'){
        cheeseTotal = 1;
    }
    else if (selectedCheese === 'Regular'){
        cheeseTotal = 0;
    }
    else if (selectedCheese === 'Extra'){
        cheeseTotal = 2;
    }
    runningTotal = runningTotal + cheeseTotal;
    console.log(selectedCheese + " = $" + cheeseTotal + ".00");
    console.log("cheese text1 "+text1);
    console.log("subtotal: $" + runningTotal + ".00")
    getCrust(runningTotal, text1);
};

function getCrust(runningTotal,text1){
    var crustTotal = 0;
    var crustArray = document.getElementsByClassName('crust');
    for(var k = 0; k < crustArray.length; k++){
        if (crustArray[k].checked){
            var selectedCrust = crustArray[k].value;
            text1 = text1 + selectedCrust + "<br>" 
        }
    }
    if (selectedCrust === 'Thin'){
        crustTotal = 0;
    }
    else if (selectedCrust === 'Pan'){
        crustTotal = 0;
    }
    else if (selectedCrust === 'Deep-dish'){
        crustTotal = 0;
    }
    else if (selectedCrust === 'Detroit'){
        crustTotal = 0;
    }
    runningTotal = runningTotal + crustTotal;
    console.log(selectedCrust + " = $" + crustTotal + ".00");
    console.log("crust text1 "+text1);
    console.log("subtotal: $" + runningTotal + ".00")
    getSauce(runningTotal, text1);
};

function getSauce(runningTotal,text1){
    var sauceTotal = 0;
    var sauceArray = document.getElementsByClassName('sauce');
    for(var m = 0; m < sauceArray.length; m++){
        if (sauceArray[m].checked){
            var selectedSauce = sauceArray[m].value;
            text1 = text1 + selectedSauce + "<br>" 
        }
    }
    if (selectedSauce === 'Half'){
        sauceTotal = 1;
    }
    else if (selectedSauce === 'Normal'){
        sauceTotal = 0;
    }
    else if (selectedSauce === 'Full'){
        sauceTotal = 2;
    }
    runningTotal = runningTotal + sauceTotal;
    console.log(selectedSauce + " = $" + sauceTotal + ".00");
    console.log("sauce text1 "+text1);
    console.log("subtotal: $" + runningTotal + ".00")
    getMeat(runningTotal, text1);
};

function getMeat(runningTotal, text1){
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName('meat');
    for (var n = 0; n < meatArray.length; n++){
        if(meatArray[n].checked){
            selectedMeat.push(meatArray[n].value);
            console.log("selected meat item: " + meatArray[n].value + ")");
            text1 = text1 + meatArray[n].value + "<br>";
        }
    }
    var meatCount = selectedMeat.length;
    if(meatCount > 1){
        meatTotal = (meatCount - 1);
    }
    else{
        meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    console.log("total selected meat items: " + meatCount);
    console.log(meatCount + "meat - 1 free meat = $" + meatTotal + ".00");
    console.log("meat text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getVeggie(runningTotal, text1);
};

function getVeggie(runningTotal, text1){
    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName('veggie');
    for (var v = 0; v < veggieArray.length; v++){
        if(veggieArray[v].checked){
            selectedVeggie.push(veggieArray[v].value);
            console.log("selected veggie item: " + veggieArray[v].value + ")");
            text1 = text1 + veggieArray[v].value + "<br>";
        }
    }
    var veggieCount = selectedVeggie.length;
    if(veggieCount > 1){
        veggieTotal = (veggieCount - 1);
    }
    else{
        veggieTotal = 0;
    }
    runningTotal = (runningTotal + veggieTotal);
    console.log("total selected veggie items: " + veggieCount);
    console.log(veggieCount + "veggie - 1 free veggie = $" + veggieTotal + ".00");
    console.log("veggie text1: " + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");
    document.getElementById('showText').innerHTML = text1;
    document.getElementById('totalPrice').innerHTML = "<h3>Total: <strong>$" + runningTotal +".00</strong></h3>" + "<img src=\"./Pizza_Css/Images/totalpup_1.png\" alt=\"pizzapup\" style=\"height:103px; width:120px; float:right;\">";
};
