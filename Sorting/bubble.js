

function bubble_sort(array){
    let count = 0;
    let wall = array.length - 1;

    while (count < wall){
        for (let index=0; index < wall; index++){
            if (array[index + 1] < array[index]) {
                // Save neighbor value because the current value at that index is going to be destroyed
                let neighborValue = array[index + 1];
                // Remove neighbor
                array.splice(index + 1, 1);
                // Insert saved neighbor value
                array.splice(index, 0, neighborValue);
            }
        }
        count += 1;
        wall -= 1;
    }
    return array
}


let test = [1, 7, 4, 0, 56, 67, 23, 11, 11];
console.log(bubble_sort(test));