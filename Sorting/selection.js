

// sp = Starting Point
function insertion_sort(array) {
    for (let [sp, num] of array.entries()){
        let count = sp;
        let index = count;
        let lowest = num;

        while (count < array.length){
            if (array[count] < lowest){
                index = count;
                lowest = array[count];
            }
            count += 1
        }

        // Remove old position
        array.splice(index, 1);
        // Insert lowest number at starting point
        array.splice(sp, 0, lowest);
    }
    return array;
}

let test = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(insertion_sort(test));