//1. On call #1, left is assigned to [21, 1, 26, 45, 29, 28, 2, 9]. On recursive call #1, 
//left is further divided to be [21, 1, 26, 45]. On recursive call #2, left is further divided to 
//be [21, 1]. On recursive call #3 - mergeSort([21, 1]) - left is further divided to be [21]. 
//On recursive call #4, mergeSort([21]) returns [21]. The algorithm then processes the 
//right-side value of 1. On recursive call #5, mergeSort([1]) returns [1]. On recursive call #6, 
//mergeSort([21, 1]) calls merge ([21], [1], [21, 1]). On recursive call #7, merge returns [1, 21]. 
//This causes mergeSort([21, 1]) to return [1, 21]. On recursive call #8, mergeSort([26, 45])
// divides left to be [26] and right to be [45]. On recursive call #9, mergeSort([26]) returns 26. 
//On recursive call #10, mergeSort([45]) returns 45. On recursive call #11, merge([26], [45], 
//[26, 45]) returns [26, 45]. This causes mergeSort([26, 45]) to return [26, 45]. On recursive call
// #12, mergeSort([21, 1, 26, 45]) calls merge([1, 21], [26, 45], [21, 1, 26, 45]) and returns 
//[1, 21, 26, 45]. On recursive call #13, mergeSort([29, 28, 2, 9]) subdivides itself into [29, 28] 
//and [2, 9]. On recursive call #14, mergeSort([29, 28]) subdivides itself into [29] and [28]. 
//On recursive call #15, mergeSort([29]) returns 29. On recursive call #16, mergeSort([28]) 
//returns 28.


function qSort(arr, start=0, end=arr.length) {
    if (start >= end) {
      return arr;
    }
    const middle = partition(arr, start, end);
    arr = qSort(arr, start, middle);
    arr = qSort(arr, middle+1, end);
    return arr;
  }
  
  function partition(arr, start, end) {
    const pivot = arr[end-1];
    let j = start;
    for (let i = start; i < end-1; i++) {
      if(arr[i] <= pivot) {
        swap(arr, i, j);
        j++;
      }
    }
    swap(arr, end-1, j);
    return j;
  }
  
  function swap (arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  
  function main(){
    const sorted = qSort(DATA);
    console.log(sorted);
    let ok = true;
    for (let i=0; i<sorted.length-1; i++) {
      if (sorted[i] > sorted[i+1]) ok = false;
    }
    console.log(ok);
  }
  main();
