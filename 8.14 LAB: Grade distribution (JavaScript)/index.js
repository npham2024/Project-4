// Takes the string of numbers and splits them by the whitespace
// Also need to convert each string into a Number
function parseScores(scoresString) {
   // TODO: Compete the function
   let str_arr = scoresString.split(" ").map(Number);
   return str_arr
}

// Used a for loop to loop through the array and counted each letter grade by incrementing by
// one depending on the spot in the array
function buildDistributionArray(scoresArray) {
   // TODO: Compete the function
   let grading_scale = [0,0,0,0,0]
   for(i = 0; i < scoresArray.length; i++){
      if(scoresArray[i] >= 90){
         grading_scale[0] += 1
      } else if (scoresArray[i] >= 80 && scoresArray[i] <= 89 ){
         grading_scale[1] += 1
      } else if (scoresArray[i] >= 70 && scoresArray[i] <= 79) {
         grading_scale[2] += 1
      } else if (scoresArray[i] >= 60 && scoresArray[i] <= 69) {
         grading_scale[3] += 1
      } else if (scoresArray[i] <= 59) {
         grading_scale[4] += 1
      }
   }
   return grading_scale
}

// Used DOM document in order to find the row elements. 
// Loop through the arr and created elements to match the count of the letter grades. 
// Loop through arr to add the count in the third row. 
function setTableContent(userInput) {
   // TODO: Compete the function
   let score_arr = parseScores(userInput)
   let grade_arr = buildDistributionArray(score_arr)
   let first_row = document.getElementById('first-row')

   let barClasses = ['bar0', 'bar1', 'bar2', 'bar3', 'bar4'];

   // Create table cells for each grade category
   for (let i = 0; i < grade_arr.length; i++) {
      let td = document.createElement('td');
      first_row.appendChild(td);
      let div = document.createElement('div');
      td.appendChild(div);
      div.style.height = `${grade_arr[i] * 10}px`; // Add unit 'px'
      div.className = barClasses[i];
   }

   let third_row = document.getElementById('third-row')
   for (let i = 0; i < grade_arr.length; i++){
      let td = document.createElement('td')
      third_row.appendChild(td)
      td.innerText = grade_arr[i]
   }

}

// TODO: Change the arguments for testing purposes
setTableContent("45 78 98 83 86 99 90 59");