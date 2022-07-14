Array.prototype.myIncludes = function (element) {
    return this.some(el => el === element);
}