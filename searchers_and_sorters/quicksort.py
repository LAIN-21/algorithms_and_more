#Welcome to a version of the QuickSort sorter.
#This quicksort algorithm uses recursion to accomplish the goal of sorting an array. 
#Under the class of SortableArray we have a partition method that takes care of always placing the rightmost number in its proper index in the array. 
#This number placement divides the array in two parts: numbers lower than the placed number and numbers higher than the placed numbers. 
#The quicksort method uses this idea to recursively invoke the partition method on each subdivision of the array, and does so until there is one number left on the remaining subarrays (determining that the array is sorted).
#This sorting algorithm is Big Oh NLogN complexity and it is one of the most efficient sorters!
#As always, credits to "A Common Sense Guide to Data Structures and Algorithms"

class SortableArray:
    def __init__(self, array):
        self.array = array

    def partition(self, left_pointer, right_pointer):
        pivot_index = right_pointer
        pivot = self.array[pivot_index]
        right_pointer -= 1
        
        while True:
            while self.array[left_pointer] < pivot:
                left_pointer += 1
            while self.array[right_pointer] > pivot:
                right_pointer -= 1
            if left_pointer >= right_pointer:
                break
            else:
                self.array[left_pointer], self.array[right_pointer] = self.array[right_pointer], self.array[left_pointer]
                left_pointer += 1
        
        self.array[left_pointer], self.array[pivot_index] = self.array[pivot_index], self.array[left_pointer]
        return left_pointer
    
    def quicksort(self, left_index, right_index):
        if right_index - left_index <=0:
            return
        pivot_index = self.partition(left_index, right_index)
        self.quicksort(left_index, pivot_index - 1)
        self.quicksort(pivot_index + 1, right_index)

array = [5, 2, 6, 8, 4, 1, 9]
sortable_array = SortableArray(array)
sortable_array.quicksort(0, len(array) - 1)
print(sortable_array.array)

