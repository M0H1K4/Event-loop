const fs = require("fs");

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("immediate finished"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
  console.log("-------------------------");

  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  setImmediate(() => console.log("immediate 2 finished"));

  process.nextTick(() => console.log("Process.nextTick"));
});

console.log("Hello from the too level code");
