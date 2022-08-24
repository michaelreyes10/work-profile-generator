const employees = require('./Employee');

class Managers extends employees {

constructor(name, id, email, officeNumb) {
    // call parent constructor here:
    super(name, id, email);
this.officeNumb = officeNumb;
}
OfficeNumber() {
    return this.OfficeNumb;
}

}


module.exports = Managers;

