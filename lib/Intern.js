const employees = require('./Employee');

class Interns extends employees {
    constructor(name, id, email, school) {
        // call parent constructor here:
        super(name, id, email);

        this.school = school;
    }
    School() {
        return this.school;
    }
    Role() {
        return "Intern";
    }
}

module.exports = Interns;