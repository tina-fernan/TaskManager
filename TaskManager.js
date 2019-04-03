class TaskManager{
    constructor(readliner){
        this.readliner=readliner;
        
    }
     ask=function (question) {
        return new Promise(resolve =>
        this.readliner.question(question, answer => resolve(answer))
        );
      };
      
      
   async talkToPerson(){
       const first=await this.readliner.ask("what is your task manager?");;
       const second = await this.readliner.ask("please enter your code");

       console.log(`This is  your ${first}${second}`);
    }
    
    
}
ask();