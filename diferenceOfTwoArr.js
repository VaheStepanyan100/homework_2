function difference(arr, arr2) {
    return [...arr.filter(el => !arr2.includes(el)),
         ...arr2.filter(el => !arr.includes(el))];
}