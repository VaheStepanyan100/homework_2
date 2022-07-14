function consecutiveArr(arr) {
    let result = [];
    let consecueiveLength = arr[arr.length - 1] + 1;

   for (let i = arr[0]; i < consecueiveLength; i++) {
        result.splice(Infinity, 0, i)
   }
   return result;
}