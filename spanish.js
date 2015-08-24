var Greeting = (function(greeting) {
  
  var spanishMessage = "";

  var spanishLexicon = {
    Merry: "Feliz",
    Christmas: "Navidad",
    and: "y",
    Happy: "Prospero",
    New: "Año",
    Year: "Nuevo"
  };

  greeting.translateToSpanish = function(userInput) {

	    for(i = 0; i < userInput.length; i++) {
	      spanishMessage += (spanishLexicon[userInput[i]] || userInput[i]) + " ";
	      
	      output = document.getElementById('newLanguage');
	      output.innerHTML = spanishMessage;
	    
	    }   
	  
	}


	
	return greeting;

})(Greeting);