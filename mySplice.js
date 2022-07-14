Array.prototype.mySplice = function(index, del, ...add) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        if (i === index && del !== 0) {
            for (let j = 0; j < del; j++) {
                delete this[i + j];
            }
        } 
        
        if (i === index && add.length) {
            for (let j = 0; j < add.length; j++) {
                this[i  + j] = add[j];
            }
        }

        if (this[i] !== undefined) {
            result.push(this[i]);
        }
    }
    return result;
}