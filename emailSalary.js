function emailSalary(employees) {
    return (employees.map(employee => 
        `${employee.email}: ${employee.salary}`))
        .toString();
}