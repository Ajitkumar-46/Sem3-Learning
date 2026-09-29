const EventEmitter=require('events');
const myEmitter= new EventEmitter();

myEmitter.on('login',()=>{
    console.log(`Student logged Successfully!!!`);
})

myEmitter.on("assign",()=>{
    console.log("Assignment Submitted!!!");
})

myEmitter.on("logout",()=>{
    console.log("Student logged Out!!!");
})

myEmitter.on("exit",()=>{
    console.log("Exit!!!");
})


myEmitter.emit('login');
myEmitter.emit('assign');
myEmitter.emit('logout');
myEmitter.emit('exit');