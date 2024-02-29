const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const setShape = require('./lib/generateShape.js');
const fileName = "./examples/logo.svg";

function createLogo(response) {
    if (!response || !response.shape) {
        throw new Error('Missing property: shape');
    }
    const svg = setShape(response);
    fs.writeFile(fileName, svg, () => console.log('created logo.svg'));
}


function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        createLogo(response);
    })
    .catch(err => {
        console.log(err)
    });
}

init();
