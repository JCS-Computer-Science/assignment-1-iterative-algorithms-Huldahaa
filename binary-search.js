function binarySearch(array, searchTerm) {
   var min = 0;
   var max = array.length -1;
   var guess;
   while(max => min) {
   guess = Math.floor((max + min)/2);
   if(array[guess] === searchTerm) {
       return guess;
   } else if (array[guess] < searchTerm) {
       min = guess + 1;
   } else {
       max = guess - 1;
   }
   }
   return -1;
		/*
     ** Check the middle element, if it's higher than the searchTerm
     ** then check the element in between the start and the middle, otherwise
     ** check the element between the middle and the end
 
     ** repeat the above process for the subset of the array
     ** keep repeating with smaller and smaller subsets until you find the searchTerm
     */
 
	 return null;
};

var numbers = [2, 1, 8, 77, 34, 92, 7, 3, 88, 6, 0, 15];
var result = binarySearch(numbers, 92);



module.exports = binarySearch;
