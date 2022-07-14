function unionUnduplicated(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2)));    
}

console.log(unionUnduplicated([1,2,3,4,1,2,3,1,2,3],[4,5,1,2]));