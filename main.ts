import inquirer from "inquirer"

// chalk ka istamal kia

import chalk from "chalk";

console.log(chalk.red.bold("Wecome to my advanture quiz game:"));
console.log(chalk.green.bold("You are required to gain maximum 4 point for the window."));

let point = 0
// Question 1
let question1 = await inquirer.prompt([
    {
        name: "One",
        message: "typeScript is a superset off?,",
        type: "list",
        choices: ['python','c++','java','javaScript']
    }
])
if (question1.One == "javaScript") {
    console.log(chalk.green.bold("you answer is currect"));
    point++
}else {
    console.log(chalk.red.bold("incurrect answer"));
    
}

// Question 2
let question2 = await inquirer.prompt([
    {
        name: "Two",
        message: "Who is the founder of microsoft",
        type: "list",
        choices: ['elon musk','bill gates','Mark','bilal']
    }
])
if (question2.Two == "bill gates") {
    console.log(chalk.green.bold("you answer is currect"));
    point++
}else {
    console.log(chalk.red.bold("incurrect answer"));
    
}

// Question 3

let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "capital of pakistan",
        type: "list",
        choices: ['karchi','punjab','islamabad','kpk']
    }
])
if (question3.three == "islamabad") {
    console.log(chalk.green.bold("you answer is currect"));
    point++
}else {
    console.log(chalk.red.bold("incurrect answer"));
    
}
// Question 4

let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "who is the current governor of sindh",
        type: "list",
        choices: ['ali','bilal','masood khan','kamran tassori']
    }
])
if (question4.four == "kamran tassori") {
    console.log(chalk.green.bold("you answer is currect"));
    point++
}else {
    console.log(chalk.red.bold("incurrect answer"));
    
}

// Question 5

let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "is with language you are hearing my voice",
        type: "list",
        choices: ['Urdu','English','Sindhi','Pashto']
    }
])
if (question5.five == "Urdu") {
    console.log(chalk.green.bold("you answer is currect"));
    point++
}else {
    console.log(chalk.red.bold("incurrect answer"));
    
}

// outout condition

if (point >= 4) {
    console.log(chalk.green.bold("congratulation!"));
    console.log(chalk.green.bold(`your points: ${point}`));
    
}else {
    console.log(chalk.red.bold("you loss! try next time"));
    console.log(chalk.red.bold(`your points: ${point}`));
    
}