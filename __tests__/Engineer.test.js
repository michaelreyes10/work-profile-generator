const Engineers = require('../lib/Engineer');
const theEngineer = new Engineers('mike', '123456', 'michaelreyesbusiness@gmail.com', 'michaelreyes10');

test('test if we can get the constructor values for the engineer object', () => {
    expect(theEngineer.name).toBe('mike');
    expect(theEngineer.id).toBe('123456');
    expect(theEngineer.email).toBe('michaelreyesbusiness@gmail.com');
    expect(theEngineer.gitUser).toBe('michaelreyes10');
});

test('test if we can get the name from the Name() method', () => {
    expect(theEngineer.Name()).toBe('mike');
});

test('test if we can get the id from the Id() method', () => {
    expect(theEngineer.Id()).toBe('123456');
});

test('test if we can get the email from the Email() method', () => {
    expect(theEngineer.Email()).toBe('michaelreyesbusiness@gmail.com');
});

test('test if we can get the github username from the GithubUser() method', () => {
    expect(theEngineer.GithubUser()).toBe('michaelreyes10');
}); 

test('test if we can get the role from the Role() method', () => {
    expect(theEngineer.Role()).toBe('Engineer');
}); 