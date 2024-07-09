window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   // Get elements by Id in order to use throughout code. 
   let convertButton = document.getElementById("convertButton")
   let cinput = document.getElementById("cInput")
   let finput = document.getElementById("fInput")
   let errorMessage = document.getElementById("errorMessage")
   let weatherImage = document.getElementById("weatherImage")

   // Event Listener for the Convert Button
   convertButton.addEventListener("click", function(){
      // Initialize values from text boxes
      let cValue = cinput.value.trim();
      let fValue = finput.value.trim();

      // Make sure that both text boxes have a value. 
      if (cValue === "" && fValue === "") {
         errorMessage.textContent = "Enter a Value";
      } else {
         errorMessage.textContent = ""; // Clear the error message if inputs are provided

         // Parse the string value 
         // Converts value if it is a number. 
         // Set error message it not a number
         if (cValue !== "") {
            let num = parseFloat(cValue);
            if (isNaN(num)) {
               errorMessage.textContent = `${cValue} is not a number`;
            } else {
               let result = convertCtoF(num);
               finput.value = result; // Set the converted value in finput
               errorMessage.textContent = ""; // Clear error message
            }
         }

         // Same as above 
         if (fValue !== "") {
            let num = parseFloat(fValue);
            if (isNaN(num)) {
               errorMessage.textContent = `${fValue} is not a number`;
            } else {
               let result = convertFtoC(num);
               cinput.value = result; // Set the converted value in cinput
               errorMessage.textContent = ""; // Clear error message
            }

            // Set the appropriate image based on the Fahrenheit value
            if (num < 32) {
               weatherImage.src = "images/cold.png";
            } else if (num >= 32 && num < 50) {
               weatherImage.src = "images/cool.png";
            } else if (num >= 50) {
               weatherImage.src = "images/warm.png";
            }
         }
      }
   })

   // Set other text box to empty when typing the opposite text box
   cinput.addEventListener("input", function () {
      finput.value = "";
   });

   finput.addEventListener("input", function () {
      cinput.value = "";
   });
}

// Math operators to covert value
function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   return degreesCelsius * 9/5 + 32
}

// Math operators to convert value
function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   return (degreesFahrenheit-32) * 5/9
}
