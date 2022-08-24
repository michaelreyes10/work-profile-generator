const Interns = require('../lib/Intern');
const theIntern = new Interns('mike', '123456', 'michaelreyesbusiness@gmail.com', 'School');

test('test if we can get the constructor values for the engineer object', () => {
    expect(theIntern.name).toBe('mike');
    expect(theIntern.id).toBe('123456');
    expect(theIntern.email).toBe('michaelreyesbusiness@gmail.com');
    expect(theIntern.school).toBe('School');
});

test('test if we can get the name from the Name() method', () => {
    expect(theIntern.Name()).toBe('mike');
});

test('test if we can get the id from the Id() method', () => {
    expect(theIntern.Id()).toBe('123456');
});

test('test if we can get the email from the Email() method', () => {
    expect(theIntern.Email()).toBe('michaelreyesbusiness@gmail.com');
});

test('test if we can get the school name from the School() method', () => {
    expect(theIntern.School()).toBe('School');
}); 