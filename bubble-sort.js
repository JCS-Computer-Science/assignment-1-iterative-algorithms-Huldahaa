function bubbleSort(array) {
    for (var i = 0; i <= array.length; i++){
        for (var j = 0; j < ( array.length - i - 1); j++){
            if (array[j] > array[j+1]){
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
	console.log(array);
}

var array = [2,7,8,9,7,2,3,1,9,4];
bubbleSort(array);
/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */

module.exports = bubbleSort;
