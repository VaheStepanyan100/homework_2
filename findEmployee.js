function findEmployee(arr, firstName, lastName) {
    return arr.find(el => el.firstName === firstName && el.lastName === lastName);
}