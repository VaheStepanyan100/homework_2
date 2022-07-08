function comaSeperatedFullName(employees) {
    return employees.map(employee => 
        `${employee.firstName} ${employee.lastName}`)
        .toString();
}
