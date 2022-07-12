// How does Asynchronous Programming works in Node JS

const apple = (callback) => {
  console.log("A for Apple");
  if (callback && typeof callback === "function") {
    callback();
  }
};

const banana = (callback) => {
  console.log("B for Banana");
  if (callback && typeof callback === "function") {
    callback();
  }
};

const coconut = (callback) => {
  console.log("C for Coconut");
  if (callback && typeof callback === "function") {
    callback();
  }
};

const date = (callback) => {
  console.log("D for Date");
  if (callback && typeof callback === "function") {
    callback();
  }
};

apple(() => {
  banana(() => {
    coconut(() => {
      date();
    });
  });
});
