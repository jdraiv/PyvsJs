
function insertionSort(array) {
    for(let [index, num] of array.entries()){
        if (index > 0) {
            let new_pos = index;
            let c_backwards = index;

            while (c_backwards > 0){
                c_backwards -= 1;
                if (num < array[c_backwards]){
                    // New position for element to be inserted.
                    new_pos = c_backwards;
                }
            }
            // Insert num at new position
            array.splice(new_pos, 0, num);
            // Remove number from old position.
            array.splice(index + 1, 1);
        }
    }
    return array;
}

let test = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(insertionSort(test));