import { Task } from "./Task";

export class TaskCollection{

    private nextId: number=1; 

    constructor(public tasks:Task[]=[]){

    }

    public addTodo(task: string): void{
        let item:Task = new Task (this.nextId,task,false);
        this.nextId++;
        this.tasks.push(item);
    }

    public printAll():void{
        
        this.tasks.forEach((item:Task)=>item.printTask());
    }

    public taskDone(id:number):void{
        let item = this.tasks.find(item =>item.taskId===id);
        item.done=true;
    }

    getTodoById(id: number) : Task {
        return this.tasks.find(item => item.taskId === id);
        }
}