function emailSalary(employees) {
    return (employees.map(el => `${el.email}: ${el.salary}`)).join();
}