import { Task } from "./Task";

export class TaskCollection{

    private nextId: number=1; 

    constructor(public userName: string,public tasks:Task[]=[]){

    }

    public addTodo(task: string): number {
        while (this.getTodoById(this.nextId)) {
        this.nextId++;
        }
        this.tasks.push(new Task (this.nextId, task));
        return this.nextId;
        }

    public printAll():void{
        
        this.tasks.forEach((item:Task)=>item.printTask());
    }

    getTodoById(id: number) : Task {
        return this.tasks.find(item => item.taskId === id);
        }
    
    markComplete(id: number) : void {
        let item:Task = this.getTodoById(id);
            if (item) {
                item.done = true;
            }
        }
}