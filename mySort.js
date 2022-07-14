Array.prototype.mySort = function (callback) {
    const newArray = [...this];

    for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < newArray.length - 1; j++) {
            if (callback(newArray[j], newArray[j + 1]) > 0) {
                const temp = newArray[j + 1];
                newArray[j + 1] = newArray[j];
                newArray[j] = temp;
            }
        }
    }
    return newArray;
}

console.log([3,2,1].mySort((a, b) => a - b));