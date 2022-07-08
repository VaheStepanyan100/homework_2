function isPalinodrom(str) {
    let length = str.length;
    let reverse = [];
    let arrOfStr = str.split('');

    for (let i = 0; i < length; i++) {
        reverse.push(arrOfStr.pop());
    }
    return reverse.join('') === str;
} 