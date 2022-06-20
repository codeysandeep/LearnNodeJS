const readline = require("readline");

const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

const ToDoList = [];

const commands = {
  view: function () {
    console.log(ToDoList);
  },
  add: function (ToDo) {
    ToDoList.push(ToDo);
  },
  remove: function (ToDo) {
    for (let index = 0; index < ToDoList.length; index++) {
      if (ToDoList[index] === ToDo) {
        ToDoList.splice(index, 1);
      }
    }
  },
};

readlineInterface.setPrompt(">> ");
readlineInterface.prompt();

readlineInterface.on("line", function (line) {
  const words = line.split(" ");
  const command = words.shift();
  const ToDo = words.join(" ");

  commands[command](ToDo);

  readlineInterface.prompt();
});
