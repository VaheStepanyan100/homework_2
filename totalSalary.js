function totalSalary(arr) {
    return arr.reduce((acc, el) => {
        return (+el.salary.slice(1) * 100  + acc * 100) / 100 ;
    }, 0)
}