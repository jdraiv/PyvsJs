
def insertion_sort(l):
    for c, num in enumerate(l):
        if c > 0:
            # "new_pos" variable will store the new position in which the current number should be inserted.
            new_pos = c
            c_backwards = c

            while c_backwards > 0:
                # Update position
                c_backwards -= 1
                if num < l[c_backwards]:
                    new_pos = c_backwards
            # Update list
            l.insert(new_pos, num)
            l.pop(c + 1)
    print(l)
    return l


test_two = [6, 5, 3, 1, 8, 7, 2, 4]
insertion_sort(test_two)
