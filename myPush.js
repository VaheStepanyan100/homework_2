Array.prototype.myPush = function (...args) {
    for (let arg of args) {
        this[this.length] = arg;
    }
    return this.length;
};
