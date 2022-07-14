Array.prototype.myUnshift = function(...args) {
    const arr = [...args, ...this];
    for (let i = 0; i < arr.length; i++) {
        this[i] = arr[i];
    }
    return arr.length;
}