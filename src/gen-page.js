const genTeams = (team) => {
    console.log(team);
    // Create an empty array to push getHTML elements on to and loop through the team data
    const getHTML = [];
    // Create functions for each type of employee that returns HTML data

const genManagers = theManagers => {
    console.log(theManagers);

    let managerHtml = ` 
        <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${theManagers.name} <br/>
           <i class="fas fa-mug-hot"></i>Manager</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${theManagers.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:"${theManagers.email}</span></li>
            <li class="list-group-item">Office Number: ${theManagers.officeNumb}</li>
            </ul>
        </div>
        `;
        getHTML.push(managerHtml);
}

const genEngineers = theEngineers => {
    console.log(theEngineers);
    let engineerHtml = ` 
    <div class="card" style="width: 18rem;">
        <div class="card-header">
       ${theEngineers.name} <br/>
       <i class="fas fa-glasses"></i>Engineer</div>
       <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${theEngineers.id}</li>
        <li class="list-group-item">Email: <span id="email">${theEngineers.email}</span></li>
        <li class="list-group-item">Github Username: ${theEngineers.gitUser}</li>
        </ul>
    </div>
    `;
    getHTML.push(engineerHtml);
}

const genInterns = theInterns => {
    console.log(theInterns);
    let internHtml = ` 
    <div class="card" style="width: 18rem;">
        <div class="card-header">
       ${theInterns.name} <br/>
       <i class="fas fa-user-graduate"></i>Intern</div>
       <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${theInterns.id}</li>
        <li class="list-group-item">Email: <span id="email">${theInterns.email}</span></li>
        <li class="list-group-item">School: ${theInterns.school}</li>
        </ul>
    </div>
    `;
    getHTML.push(internHtml);
}

for (let i = 0; i < team.length; i++) {
    if (team[i].Role() === "Manager") {
        genManagers(team[i]);
    }
    if (team[i].Role() === "Engineer") {
        genEngineers(team[i]);
    }
    if (team[i].Role() === "Intern") {
        genInterns(team[i]);
    }
}
return getHTML.join('');
}

// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE getHTML>
<getHTML lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../dist/styles.css" />
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
    <h1> My Team </h1>
    </header>
    <main> ${genTeams(team)} </main>
     
</body>
</getHTML>
    `;
}