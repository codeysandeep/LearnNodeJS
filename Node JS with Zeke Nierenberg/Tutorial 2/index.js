// Command Line ToDoList with Node JS

import readline from "readline";

const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

const ToDoList = [];

const commands = {
  view: () => {
    console.log(ToDoList);
  },
  add: (ToDo) => {
    ToDoList.push(ToDo);
  },
  remove: (ToDo) => {
    for (let index = 0; index < ToDoList.length; index++) {
      if (ToDoList[index] === ToDo) {
        ToDoList.splice(index, 1);
      }
    }
  },
};

readlineInterface.setPrompt(">> ");
readlineInterface.prompt();

readlineInterface.on("line", (line) => {
  const words = line.split(" ");
  const command = words.shift();
  const ToDo = words.join(" ");

  commands[command](ToDo);

  readlineInterface.prompt();
});
