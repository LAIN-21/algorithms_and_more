#Welcome to a version of the QuickSelect selector.
#This quickselect algorithm uses a similar idea to the binary search as it constantly divides the array into two parts.
#However, this algorithm is different to binary search as it doesn't search for a specific value, rather the "kth lowest value"
#As well, it uses the partition method (that divides the array) and itself (quickselect) recursively to find the asked value.
#If you've seen my quicksort.py file you'll notice that this is the same class as that one, but I've added the quckselect method to the class here.
#This searching algorithm is Big Oh NLogN complexity in the average case and it is one of the most efficient searchers!
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
    
    def quickselect(self, kth_lowest, left_index, right_index):
        if right_index - left_index <= 0:
            return self.array[left_index]
        pivot_index = self.partition(left_index, right_index)
        if kth_lowest < pivot_index:
            return self.quickselect(kth_lowest, left_index, pivot_index - 1)
        elif kth_lowest > pivot_index:
            return self.quickselect(kth_lowest, pivot_index + 1, right_index)
        else:
            return self.array[pivot_index]
        
array = [5, 2, 6, 8, 4, 1, 9]
sortable_array = SortableArray(array)
lowest_value = sortable_array.quickselect(0, 0, len(array) - 1)
print(lowest_value)

#Prints lowest value which is 1