
const arr = [-7, -5, -4, 3, 6, 8, 9];

// O(nlog(n)) time | O(n) space
function squareSortedArray1(arr) {
    const res = [];
    let i = 0;
    for (const x of arr)
        res[i++] = x * x;

    return res.sort((a, b) => a - b);

}



// O(n) time | O(n) space
function squareSortedArray(arr) {
    const res = [];
    let i;
    let start = 0;
    let end = arr.length - 1;
    for (i = arr.length - 1; i >= 0; i--) {
        if (Math.abs(arr[end]) > Math.abs(arr[start])) {
            res[i] = arr[end] * arr[end];
            end--;
        } else {
            res[i] = arr[start] * arr[start];
            start++;
        }
    }
    return res;
}
const result = squareSortedArray(arr);
console.log(result);
