function Subject() {
  this.observers = {};
}
Subject.prototype.on = function (event, fn) {
  if (event in this.observers) this.observers[event].push(fn);
  else {
    this.observers[event] = [];
    this.observers[event].push(fn);
  }
};
Subject.prototype.emit = function (event, msg) {
  this.observers[event].forEach((fn) => fn(msg));
};
Subject.prototype.off=function(event,fn){
  let index=this.observers[event].findIndex(f=>f===fn) 
  this.observers[event].splice(index,1)
}
const subject = new Subject();
subject.on("eat", console.log);
subject.on("study", console.log);
subject.on("main", console.log);
function foo(msg) {
  console.log("foo: " + msg);
}
subject.on("eat", foo);
subject.on("study", foo);
console.log(subject.observers);

subject.emit("eat", "Corn");
subject.emit("study", "cs445");
// //output
// // Corn
// // foo: Corn
// // cs445
// // foo: cs445
subject.off('eat',foo);
subject.emit('eat', 'Banana');
// //output
// //Banana
