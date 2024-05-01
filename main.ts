#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"


let todolist = [];
let condition = true

console.log(chalk.greenBright.bold("\n \t My Todo-List Application\n"));

while(condition)
{
    let addTask = await inquirer.prompt(
    [
        {
            name: "todo",
            type: "input",
            message:chalk.blueBright( "please enter your task work.")
        },
        {
            name: "addmore",
            type: "confirm",
            message: chalk.greenBright.bold("Do you want to add more todo work?"),
            default: "false"
        }
    ]
);
todolist.push(addTask.todo);
condition = addTask.addmore
console.log(chalk.redBright.bold.italic("\n \t My Todo-List Application update successfully.\n" , (chalk.yellowBright.bold(todolist))));
}