

def bubble_sort(l):
    count = 0
    wall = len(l) - 1

    while count < len(l):
        for index in range(wall):
            if l[index + 1] < l[index]:
                # Save neighbor value because the current value at that index is going to be destroyed.
                n_value = l[index + 1]
                l.pop(index + 1)
                # Insert saved neighbor value
                l.insert(index, n_value)

        count += 1
        wall -= 1
    return l


test = [1, 7, 4, 0, 56, 67, 23, 11, 11]
test_two = [2, 1, 3]
print(bubble_sort(test))