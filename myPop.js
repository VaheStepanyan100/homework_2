Array.prototype.myPop = function () {
    let forReturn = this[this.length - 1];
    this.length = this.length - 1;
    return forReturn;
}