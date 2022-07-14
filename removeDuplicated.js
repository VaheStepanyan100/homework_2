function removeDuplicatd(sortedArr) {
    let length = sortedArr.length;
    for (let i = 0; i < length; i++) {
        if (sortedArr[i + 1] - sortedArr[i] === 0) {
            sortedArr.splice(i, 1);
        }
    }
    return sortedArr;
}