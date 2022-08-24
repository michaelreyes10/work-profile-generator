const Managers = require('../lib/Manager');
const theManagers = new Managers ('mike', '123456', 'michaelreyesbusiness@gmail.com', '123');

test('test if we can get the constructor values for the employee object', () => {
    expect(theManagers.name).toBe('mike');
    expect(theManagers.id).toBe('123456');
    expect(theManagers.email).toBe('michaelreyesbusiness@gmail.com');
    expect(theManagers.officeNumb).toBe('123');
});

test('test if we can get the name from the Name() method', () => {
    expect(theManagers.Name()).toBe('mike');
});

test('test if we can get the id from the Id() method', () => {
    expect(theManagers.Id()).toBe('123456');
});

test('test if we can get the email from the Email() method', () => {
    expect(theManagers.Email()).toBe('michaelreyesbusiness@gmail.com');
});

test('test if we can get the office number from the OfficeNum() method', () => {
    expect(theManagers.OfficeNumber()).toBe('123');
}); 

