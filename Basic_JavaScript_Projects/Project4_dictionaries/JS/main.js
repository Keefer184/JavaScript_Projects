function myDictionary(){ //Defines Function
    var Animal={        //Defines object
        Species:"Dog",  //Begin constructing KVPs
        Color:"Black",
        Breed:"Lab Mix",
        Age:4,
        Sound:"Woof",
        Name:"Buttercup"
    };
    delete Animal.Sound; //Deletes KVP Sound
    document.getElementById('Dictionary').innerHTML=Animal.Sound; //Attempts to display "Woof"", but will return 'undefined' since it was just deleted
}