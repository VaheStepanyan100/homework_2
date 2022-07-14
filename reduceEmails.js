function emails(arr) {
    return arr.reduce((acc, val) => {
        return acc + val.email + '//';
    },'').slice(0, -2);
}