function insertionSort(array) {
	let n = array.length;
	for (let i = 1; i < n; i++) {
		let current = array[i];
		let j = i-1;
		while ((j > -1) && current < array[j]) {
			array[j+1] = array[j];
			j--;
		}
		array[j+1] = current;
	}
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */

	return array;
}

let array = [2,7,8,9,7,2,3,1,9,4];
insertionSort(array);
console.log(array);

module.exports = insertionSort;
