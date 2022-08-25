const employees = require('./Employee');

class Engineers extends employees {
    constructor(name, id, email, gitUser) {
        // call parent constructor here:
        super(name, id, email);

        this.gitUser = gitUser;
    }
    GithubUser() {
        return this.gitUser;
    }
    Role() {
        return "Engineer";
    }

}

module.exports = Engineers; 