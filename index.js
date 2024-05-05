#!/usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter from currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR'],
    },
    {
        name: 'to',
        message: "Enter To currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR'],
    },
    {
        name: 'amount',
        message: 'Enter your amount',
        type: 'number'
    },
]);
let userFromcurrency = user_answer.from;
let userTocurrency = user_answer.to;
let fromAmount = currency[userFromcurrency]; //Exchange rate
let toAmount = currency[userTocurrency]; //Exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //USD base currency //4
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
