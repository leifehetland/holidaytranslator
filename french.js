var Greeting = (function(greeting) {
  
  var frenchMessage = "";

  var frenchLexicon = {
	Merry: "Joyeux",
	Christmas: "Noel",
	and: "et",
	New: "Bon",
	Year: "Année"
};

  greeting.translateToFrench = function(userInput) {

      for(i = 0; i < userInput.length; i++) {
        frenchMessage += (frenchLexicon[userInput[i]] || userInput[i]) + " ";
        
        output = document.getElementById("newLanguage");
        output.innerHTML = frenchMessage;
      
      }   
    
  }


  
  return greeting;

})(Greeting);

