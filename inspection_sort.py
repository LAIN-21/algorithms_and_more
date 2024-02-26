# The inspection sort starts by holding the second item of the array in memory and check the left value. If the left value is greater than the one in memory, it is switched right and the one in memory is switched left. This process repeats for all items in the array. This algorithm has a Big Oh Complexity of N^2 + 2N - 2, but in Big Oh it just N^2. Credit to 'A Common Sense Guide to Data Structures and Algorithms'.

def insertion_sort(array):
    for index in range(1, len(array)):
        temp_value = array[index]
        position = index - 1

        while position >= 0:
            if array[position] > temp_value:
                array[position + 1] = array[position]
                position = position - 1
            else:
                break
        array [position + 1] = temp_value
    return array

array = [3, 7, 4, 9, 10, 23, 14, 8, 17]

print(insertion_sort(array))