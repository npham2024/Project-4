# Project-4
 All Project 4 Assignments. (Module 8 in Zybooks)

## 8.14 LAB: Grade distribution (JavaScript)
- The first two steps needed to complete this lab were basic Javascript code. Using the split method I was able to split a string and turn it into an array. At first I didn't convert it to an intetger so when I was using comparision operators it was not working. 

- In the `buildDistributionArray` function I was able to use a for loop to get a count of how many letter grades there were. I think there might be a better way to accomplish this. I used brute force and just used the indexes corresponding to the letter grade. 

- In the `setTableContent` I was able to use the DOM document functions. Locating an element, creating an element, and appending elements. Also was able to access attributes of elements. At first I started making each indiviual td and div for each letter grade. It was tendeious and I knew there was a better way. I struggled a little but to match the className to the right element when initially using the for loop to create the elements. With some digging I found out that making another array with the classNames in the correct indexes would do the trick. 

### Takeaways
- I was able to practice my for loops and basic javascript. 
- Used document methods to create, append, and located html elements. 
- Practiced manipluation of element attributes.

## 8.15 LAB: Temperature converter (JavaScript)
- This was probably the most trickiest of the labs for me. I got to practice using event listeners which was helpful. The logic of it all was what was mixing me. Having to parse the values as well as setting error messages. I was still not able to get the images done correctly. Some passed on the tests but there was one that I could not pass. Not sure why the logic didn't work. 

### Takeaways
- Continued to use `document.getElementById` in order to locate html elements. 
- `addEventListeners` to html elements in order to interact with the DOM.
- Practice with error messaging. 
- Accessed attributes within html elements. 

## 8.16 LAB: Tic-Tac-Toe (JavaScript)
- This seemed daughting when first looking at the code. However most of the logic for the tic tac toe was already there. The most difficult part would be making the computers move randomized. I thought it was confusing at first when I was clearing a timeout that was not being set yet in the beginning steps of the problem. Also struggle a little bit with the logic of `switchTurn()` whenever `playerTurn = true` then it is the computer turn and vice versa. 

### Takeaways
- Using `setTimeout` and `clearTimeout`. Made me understand the purpose of it. Just a delayed function running. 
- Learned the difference between a NodeList and an Array. In order to find all the buttons that were empty I needed to use the filter method. But a Nodelist does not allow this. 
- `getGameBoardButtons()` which was already written helped me to understand for loops when dealing with elements. Also demostrated the for... of... loop. instead of `for(let i = 0; i < length; i++)`

