Array.prototype.myConcat = function(...args) {
    let temp = [];

    for (let arg of args) {
        temp = [...temp, ...arg];
    }
    return  [...this, ...temp];    
}
