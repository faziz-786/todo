import { Task } from "./Task";
import { TaskCollection } from "./TaskCollection";

console.clear();

let collection1:TaskCollection = new TaskCollection();
let collection2:TaskCollection = new TaskCollection();


collection1.addTodo("col1 task1");
collection1.addTodo("col1 task2");

collection2.addTodo("col2 task1");
collection2.addTodo("col2 task2");


collection1.markComplete(2)
collection2.markComplete(1)
collection1.printAll()
collection2.printAll()

