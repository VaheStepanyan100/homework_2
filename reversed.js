function reverse(arr) {
    let result = [];
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        result.push(arr.pop());
    }
    return result;
}
