

# sp = Starting Point
def selection_sort(l):
    # For every number in loop
    for sp, num in enumerate(l):
        index, lowest = sp, num
        # Find number starting from the current position
        for sub_c in range(sp, len(l)):
            if l[sub_c] < lowest:
                index = sub_c
                lowest = l[sub_c]

        # Remove position of the lowest element
        l.pop(index)
        # Insert at c position
        l.insert(sp, lowest)
    return l


test = [6, 5, 3, 1, 8, 7, 2, 4]
print(selection_sort(test))
