const inquirer = require('inquirer');
// const genPage = require('./src/page-temp');
// const { writeFile, copyFile } = require('./dist/gen-site.js');

const getManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInfo => {
                if (nameInfo) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Enter your employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number (Required)',
            validate: officeNum => {
                if (officeNum) {
                    return true;
                } else {
                    console.log('Please enter your office number!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'menu',
            message: 'Please select which option you would like to continue with:',
            choices: ['add an engineer', 'add an intern', 'finish building my team']
        }
    ]);
};

const getEmployee = employeeInfo => {
    console.log(`
    
    Add a New Employee
    ==================
    `);

    // If there's no 'employees' array property, create one
    if (!employeeInfo.employees) {
        employeeInfo.employees = [];
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of engineer? (Required)',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter the name of engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Enter your employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter your Github username. (Required)',
            validate: githubUser => {
                if (githubUser) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        }
    ]).then(employeeInfo => {
        employeeInfo.employees.push(employeeInfo);
        if (employeeInfo.confirmAddEmployee) {
            return promptProject(employeeInfo);
        } else {
            return employeeInfo;
        }
    });
};
const getIntern = internInfo => {
    console.log(`
    
    Add a New Intern
    ================
    `);

    // If there's no 'employees' array property, create one
    if (!internInfo.interns) {
        internInfo.interns = [];
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the name of the intern? (Required)',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter the name of the intern!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Enter your employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter your Github username. (Required)',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        }
    ]).then(internInfo => {
        internData.interns.push(internInfo);
        if (internInfo.confirmAddIntern) {
            return promptIntern(internInfo);
        } else {
            return internInfo;
        }
    });
};

getManager()
    .then(getEmployee)
    .then(employeeInfo => {
        return genPage(employeeInfo);
    })
    .then(getIntern)
    .then(internInfo => {
        return generatePage(internInfo);
    })
    .then(pgHTML => {
        return writeFile(pgHTML);
    })
    .then(writeFileResp => {
        console.log(writeFileResp);
        return copyFile();
    })
    .then(copyFileResp => {
        console.log(copyFileResp);
    })
    .catch(err => {
        console.log(err);
    });