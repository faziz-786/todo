import { Task } from "./Task";
import { TaskCollection } from "./TaskCollection";

console.clear();

let todos = [
    new Task(1, "Buy Flowers"), new Task(2, "Get Shoes"),
    new Task(3, "Collect Tickets"), new Task(4, "Call Joe", true)];

console.log(todos)

let collection = new TaskCollection("Adam", todos);

console.log(`${collection.userName}'s Todo List`);
let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
console.log(JSON.stringify(todoItem));

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

