// TODO: Write code to define and export the Employee class
class Employee {
    constructor(employeename, employeeid, email) {
      this.employeename = employeename;
      this.employeeid = employeeid;
      this.email = email;
      // this.role = role;
    }

    getName() {
      return this.employeename
    }

    getId() {
      return this.employeeid
    }

    getEmail() {
      return this.email
    }
    
    getRole() {
      return "Employee"
    }
  }
  module.exports = Employee;