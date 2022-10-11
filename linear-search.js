function linearSearch(array, searchTerm) {
	
	for(let i = 0; i < array.length; i++) {
		if (array[i] == searchTerm)
		return i;
		
	}
	
	
}

module.exports = linearSearch;
// let numbers = [3, 7, 2, 9, 1, 5 ];
// let searchTerm = 9;
// let array = array.length;


/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 **
	 ** Return the index of the found element
	 */

