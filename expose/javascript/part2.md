1. Line 12 will print 3 because that is the last value of i that doesn't fulfill the condition of being less than the length of prices. i's last value is 3.
2. Line 13 will print 150 because that is the discounted price of the last value in the prices array, the last iteration of the for loop.
3. Line 14 will print 150 because that is the final price of the last value in the prices array, the last iteration of the for loop.
4. The function will return an array of the final discounted prices calculated in the for loop: [50, 100, 150]
5. Line 12 will cause an error because i is being called outside of the scope of its code block.
6. Line 13 will will cause an error because discountedPrice is being called outside of the scope of its code block.
7. Line 14 will print 150 because it finalPrice being called in the scope of its code block, and 150 is the value of finalPrice of the last iteration of the for loop.
8. The function will return an array of  the final discounted prices calculated in the for loop: [50, 100, 150] because discounted is being returned within the scope of its code block.
9. Line 11 will cause an error because i is being called outside of the scope of its code block.
10. Line 12 will print 3 because length is being called within the scope of its code block without being changed and is the length of the prices array.
11. The function will  return an array of  the final discounted prices calculated in the for loop: [50, 100, 150] because discounted is a const array that cannot be reassigned, but its elements can be changed.
12.
  - student.name
  - student['Grad Year']
  - student.greeting()
  - student['Favorite Teacher'].name
  - student.courseLoad[0]
13.
  - '32' since integers map to their exact string representation
  - 1 because Javascript cannot subtract from strings so it automatically converts 3 into a number.
  - 3 because it adds nothing to the number
  - '3null' because Javascript concatenates the 3 to the null.
  - 4 because Javascript maps true to the number 1
  - 0 because Javascript maps false to the number 0 and null adds nothing
  - '3undefined' because Javascript concatenates both.
  - NaN because Javascript cannot subtract or concatenate and maps 3 to a number and 3 - undefined is not a number.
14.
  - true because Javascript maps 2 to a number.
  - false because Javascript cannot compare string with those signs.
  - true because Javascript reads both as comparable numbers.
  - false because a triple equal sign does not map the data types and therefore not comparable.
  - false because maps true to 1 and 1 is not equal to 2
  - true because both are comparable booleans.
15. == compares regardless of data type whereas === compares only the same data types.
17. The function will call doSomething on each number in the array in the for loop, therefore the function will return [2,4,6] since doSomething will multiply each number in the array by 2.
19. 1
4
3
2
