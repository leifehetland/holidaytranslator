var Greeting = (function() {
	
    return{

		getInput: function() {
			var userInput = document.getElementById("takesEnglish").value;
			return userInput;
		},

		translate: function() {

        var userInput = document.getElementById("takesEnglish").value;
        var language = document.getElementById("languages").value;

        var wordsArray = userInput.split(" ");

        if (wordsArray.length > 0 && language == 'French') {
          Greeting.translateToFrench(wordsArray);
        };

        if (wordsArray.length > 0 && language == 'Spanish') {
          Greeting.translateToSpanish(wordsArray);
		  }
	   }
    }
})();


document.getElementById("translateButton").addEventListener("click", Greeting.translate);

