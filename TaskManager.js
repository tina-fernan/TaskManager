
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
   });
   
class TaskManager{
    constructor(){
        this.task=[];
        
    }
   
     ask() {
        return new Promise(resolve =>{
            const recursiveFn=()=>{
                this.rl(function(item){
                    if(item!=="quit"){
                        this.task.push(item);
                        recursiveFn();
                    }else{
                        resolve();
                    }
                });
            }
        recursiveFn();
      });
    }
    getTask(){
        return this.task;
    }
    //It is updates 
      
   async talkToPerson(){
       const first=await rl.ask("what is your task manager?");;
       const second = await rl.ask("please enter your task");

       console.log(`This is  your ${first}${second} answer.`);
    };

    
}
const taskManager = new TaskManager();
taskManager.talkToPerson();
