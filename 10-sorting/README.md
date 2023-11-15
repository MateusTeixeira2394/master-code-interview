# Sorting algorithms

## Summary 📊


| Algorithm 💻 | Best 🕒| Average 🕒| Worst 🕒 | Space Complexity 💾 |
|--------|-------------|----------------|-------------|------------------|
|Bubble Sort|O(n)|O(n^2)|O(n^2)|O(1)|
|Insertion Sort|O(n)|O(n^2)|O(n^2)|O(1)|
|Selection Sort|O(n^2)|O(n^2)|O(n^2)|O(1)|
|Merge Sort|O(n log(n))|O(n log(n))|O(n log(n))|O(n)|
|Quick Sort|O(n log(n))|O(n log(n))|O(n^2)|O(log(n))|
|Heap Sort|O(n log(n))|O(n log(n))|O(n log(n))|O(1)|
|Radix Sort|O(nk)|O(nk)|O(nk)|O(n+k)|
|Counting Sort|O(n+k)|O(n+k)|O(n+k)|O(k)|

## Going through each algorithm

### Bubble Sort

Each interaction takes the greatest number to the end of the array until it is fully sorted. This algorithm tries to imitate a bubble behavior.

Although this algorithm doesn't have a good speed complexity, with average equals O(n^2), but when we deal with short values or when they are almost sorted this algorithm can achieve a O(n) speed performance.

Besides that, It has a good space complexity with O(1) and it is good for learn about sorting algorithms because it is one of the easiest implementation.

### Insertion Sort

Each interaction will insert the current element of unsorted array in a new array in the sorted position. It means, if this current position is the smallest value of the new array, it will be inserted in the fist position. If it is the greatest, it will be inserted in the last position. Otherwise, it will be inserted between the both smaller and greater values.

Like [Bubble Sort](#bubble-sort), it has the same speed and memory complexity and it is as easy as [Bubble Sort](#bubble-sort), it being so easy to learn sorting algorithms too. 

### Selection Sort

Each interaction will select the smallest value of the whole array and put it in the fists positions until the all its elements are sorted.

Of the all sorted algorithms shown in this topic, it has the worst speed and memory complexity, but it is the easiest to learn about sorting algorithms.


### Merge Sort

Using a divide and conquer strategy that divides an array into two halves, recursively sorts each half, and then merges them back together in a sorted manner. It involves two main steps: splitting the array and merging the sorted halves.

It is the one of the best sorting algorithms with the speed complexity equals to O(nlog(n)) in any situation and its memory complexity is O(n), considered a good one.

### Quick Sort

Every one interaction selects the last element as the pivot, partitions the array into elements smaller and larger than the pivot, and recursively sorts the sub-arrays. 

It is as efficient as [Merge Sort](#merge-sort), but there are some tradeoffs: Differently of the [Merge Sort](#merge-sort) its worst case is worst then the [Merge Sort](#merge-sort) with O(n^2) of speed performance. On the other hand, it has a better memory complexity with O(log(n)). So, the choice will depend on the necessity of the problem.

### Heap Sort

Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It consists of two main steps: creating a max heap from the array (where each parent node is greater than or equal to its child nodes), and repeatedly extracting the maximum element from the heap and rebuilding the heap until the entire array is sorted.

It has the same speed performance of the [Merge Sort](#merge-sort) and a little better of [Quick Sort](#quick-sort) because of its worst case. Futhermore, what it turns the [Heap Sort](#heap-sort) better than both is due to its memory complexity with O(1);


### Radix Sort

Radix Sort is a non-comparative sorting algorithm that works by distributing elements into buckets based on individual digits. It processes the digits from the least significant to the most significant, creating sorted sublists at each iteration. This process is repeated until the entire array is sorted. Radix Sort is particularly useful for sorting integers or strings with fixed-length representations.

### Counting Sort

It shares some similarities with [Radix Sort](#radix-sort), particularly in that both are non-comparative sorting algorithms. They both exploit specific characteristics of the input elements to achieve linear time complexity under certain conditions.

This algorithm, for instance, counts the occurrences of each element and uses this information to determine the final sorted order. It is efficient when the range of input values is not significantly larger than the number of elements.

[Radix Sort](#radix-sort), on the other hand, distributes elements into buckets based on individual digits and processes these digits from the least significant to the most significant. It is suitable for sorting integers or strings with fixed-length representations.

While both Radix Sort and Counting Sort have linear time complexities in certain scenarios, they differ in their underlying mechanisms and the nature of the characteristics they exploit for sorting.

I didn't code these algorithms because its complexity of coding and they are not charged in technical interviews. But it is good to know that they are the best sorting algorithms and they have some limitations: 

* They must be few values around, according to the course, between one and thousand.
* They must be integer.