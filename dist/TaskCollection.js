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
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.tasks.push(new Task_1.Task(this.nextId, task));
        return this.nextId;
    }
    printAll() {
        this.tasks.forEach((item) => item.printTask());
    }
    getTodoById(id) {
        return this.tasks.find(item => item.taskId === id);
    }
    markComplete(id) {
        let item = this.getTodoById(id);
        if (item) {
            item.done = true;
        }
    }
}
exports.TaskCollection = TaskCollection;
