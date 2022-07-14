function checkSalary(arr, n) {
    return arr.every(el => el.salary.slice(1) > n);
}