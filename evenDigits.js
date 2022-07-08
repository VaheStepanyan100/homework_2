function evenDigits(num) {
    let result = [];
    
    let str = String(num);
    for (let item of str) {
        if (item % 2 === 0) {
            result.push(item);
        }
    }
    return result;
}