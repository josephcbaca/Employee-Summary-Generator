// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(employeename, employeeid, email, github) {
        super(employeename, employeeid, email);

        this.github = github;
    }
    // getRole() overridden to return Engineer
    getRole() {
        return "Engineer"
    }

    getGithub() {
        return this.github
    }
}

module.exports = Engineer