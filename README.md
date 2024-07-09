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