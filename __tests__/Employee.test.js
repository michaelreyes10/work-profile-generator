const employees = require('../lib/Employee');
const theEmployees = new employees('mike', '123456', 'michaelreyesbusiness@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(theEmployees.name).toBe('mike');
    expect(theEmployees.id).toBe('123456');
    expect(theEmployees.email).toBe('michaelreyesbusiness@gmail.com');
});

test('test if we can get the name from the Name() method', () => {
    expect(theEmployees.Name()).toBe('mike');
});

test('test if we can get the id from the Id() method', () => {
    expect(theEmployees.Id()).toBe('123456');
});

test('test if we can get the email from the Email() method', () => {
    expect(theEmployees.Email()).toBe('michaelreyesbusiness@gmail.com');
}); 