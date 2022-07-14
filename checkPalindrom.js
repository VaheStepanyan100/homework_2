function isPalindrom(str) {
    let copy = str;
    return copy.split('').reverse().join('') === str;
}