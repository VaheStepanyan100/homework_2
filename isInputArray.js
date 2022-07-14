// function isInputArray(input) {
//     return Array.isArray(input);
// }


// function isInputArray(input) {
//     return input instanceof Array;
// }

function isInputArray(input) {
    if (toString.call(input) === '[object Array]') {
        return true;
    }
    return false;
}

console.log(isInputArray([]))