"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCollection = void 0;
const Task_1 = require("./Task");
class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
        this.nextId = 1;
    }
    addTodo(task) {
        let item = new Task_1.Task(this.nextId, task, false);
        this.nextId++;
        this.tasks.push(item);
    }
    printAll() {
        this.tasks.forEach((item) => item.printTask());
    }
    taskDone(id) {
        this.tasks.find(item => item.taskId === id).done = true;
    }
}
exports.TaskCollection = TaskCollection;
