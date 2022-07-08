function formatEmails(employees) {
    return (employees.map(el => `${el.email}//`)).join('');
}
  