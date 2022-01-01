export class Task {

    public constructor(public taskId:number,public task:string,public done:boolean=false){

    }

    public printTask(): void{ 
        console.log(`id:${this.taskId}\tTask:${this.task}\tDone:${this.done}`)
    }
}