"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = require("./Task");
console.clear();
let todos = [
    new Task_1.Task(1, "Buy Flowers"), new Task_1.Task(2, "Get Shoes"),
    new Task_1.Task(3, "Collect Tickets"), new Task_1.Task(4, "Call Joe", true)
];
console.log(todos);
// let collection1:TaskCollection = new TaskCollection();
// let collection2:TaskCollection = new TaskCollection();
// collection1.addTodo("col1 task1");
// collection1.addTodo("col1 task2");
// collection2.addTodo("col2 task1");
// collection2.addTodo("col2 task2");
// collection1.markComplete(2)
// collection2.markComplete(1)
// collection1.printAll()
// collection2.printAll()
