const colorKeywords = require('./color.js');

const questions = [
    // Shape
    {
        name: 'shape',
        message: 'What shape would you like for your logo?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },

    // Color
    {
        name: 'shapeColorChoice',
        message: 'What is the color of the shape? Choose a color format: ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    // Keywords for color, linked in color.js
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color keyword",
        when: (answers) => answers.shapeColorChoice === 'color keyword',
        validate: (answer) => validateColor(answer)
    },
    // Hexadecimal 
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter a hexadecimal number (e.g., #CCCCCC)",
        when: (answers) => answers.shapeColorChoice === 'hexadecimal',
        validate: (answer) => validateHexColor(answer)
    },

    // Text input 3 char max
    {
        name: 'text',
        message: 'What text would you like for your logo?',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return "Text must be three characters or less.";
            }
            return true;
        }
    },

    // Text Color
    {
        name: 'textColorChoice',
        message: 'Choose a color format: ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    
    {
        type: "input",
        name: "textColor",
        message: "Enter the text color",
        when: (answers) => answers.textColorChoice === 'color keyword',
        validate: (answer) => validateColor(answer)
    },
    
    
    {
        type: "input",
        name: "textColor",
        message: "Please enter a hexadecimal number (e.g., #CCCCCC)",
        when: (answers) => answers.textColorChoice === 'hexadecimal',
        validate: (answer) => validateHexColor(answer)
    },
];

function validateColor(answer) {
    const lowerCaseAnswer = answer.toLowerCase();
    if (colorKeywords.includes(lowerCaseAnswer)) {
        return true;
    }
    return "Enter a valid color keyword";
}

function validateHexColor(answer) {
    const hexRegex = /^#[0-9A-F]{6}$/i;
    if (!hexRegex.test(answer)) {
        return "Please enter a valid hexadecimal color (e.g., #CCCCCC)";
    }
    return true;
}

module.exports = questions;
