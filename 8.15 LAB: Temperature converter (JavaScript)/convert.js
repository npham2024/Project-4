window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   let convertButton = document.getElementById("convertButton")
   let cinput = document.getElementById("cInput")
   let finput = document.getElementById("fInput")
   let errorMessage = document.getElementById("errorMessage")
   let weatherImage = document.getElementById("weatherImage")

   convertButton.addEventListener("click", function(){
      let cValue = cinput.value.trim();
      let fValue = finput.value.trim();

      if (cValue === "" && fValue === "") {
         errorMessage.textContent = "Enter a Value";
      } else {
         errorMessage.textContent = ""; // Clear the error message if inputs are provided

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

   cinput.addEventListener("input", function () {
      finput.value = "";
   });

   finput.addEventListener("input", function () {
      cinput.value = "";
   });
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   return degreesCelsius * 9/5 + 32
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   return (degreesFahrenheit-32) * 5/9
}
