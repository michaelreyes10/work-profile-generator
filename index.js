const inquirer = require('inquirer');
const Managers = require('./lib/Manager');
const Engineers = require('./lib/Engineer');
const Interns = require('./lib/Intern');
const genSite = require('./src/gen-page.js');
const fs = require("fs");
const path = require("path");
const getDIR = path.resolve(__dirname, "outcome")
const getPath = path.join(getDIR, "generated-output.html");
const teamMem = [];

const getManagers = () => {
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
    
    ]).then(answers => {
    console.log(answers);
    const theManagers = new Managers(answers.name, answers.employeeId, answers.email, answers.officeNumber);
    teamMem.push(theManagers);
    getMenu();
})
}

const getMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select which option you would like to continue with:',
            choices: ['add an Engineers', 'add an intern', 'finish building my team']
        }])

        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an Engineers":
                    genEngineer();
                    break;
                case "add an intern":
                    genIntern();
                    break;
                default:
             createTeam();
            }
        });
};
    
const genEngineer = () => {
    console.log(`
    
    Add a New Engineer
    ==================
    `);

    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Engineers? (Required)',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter the name of the Engineers!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
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
            validate: gitUser => {
                if (gitUser) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const theEngineer = new Engineers(answers.name, answers.employeeId, answers.email, answers.gitUser);
        teamMem.push(theEngineer);
        getMenu();
    })
};

const genIntern = () => {
    console.log(`
    
    Add a New Intern
    ===============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern? (Required)',
            validate: intName => {
                if (intName) {
                    return true;
                } else {
                    console.log('Please enter the name of the intern!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
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
            name: 'school',
            message: 'Enter your school name. (Required)',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter your school name!');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const theIntern = new Interns(answers.name, answers.employeeId, answers.email, answers.school);
        teamMem.push(theIntern);
        getMenu();
    })
};

const createTeam = () => {
    console.log(`
    
    Finished building my team!
    ==========================
    `);

    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(getDIR)) {
        fs.mkdirSync(getDIR)
    }
    fs.writeFileSync(getPath, genSite(teamMem), "utf-8");
}

getManagers();