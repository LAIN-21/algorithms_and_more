# Credit to 'A Common Sense Guide to Data Structures and Algorithms'.

def binary_search(array, x):
    low_end = 0
    high_end = len(array) - 1
    found = False

    while low_end <= high_end:
        midpoint = (low_end + high_end) // 2
        value_at_midpoint = array[midpoint]
        if x == value_at_midpoint:
            print(f'Your number is at the index {midpoint} of the provided array')
            print('Fun Fact: This array has what computer scientists call "Big Oh log n" complexity')
            found = True
            break
        elif x < value_at_midpoint:
            high_end = midpoint - 1
        elif x > value_at_midpoint:
            low_end = midpoint + 1
    if found == False:
        print('Your number is not in the provided array')

array = [0, 1, 2, 3, 4, 5.5, 6, 7, 8.5, 9, 10]
x = 3

binary_search(array, x)