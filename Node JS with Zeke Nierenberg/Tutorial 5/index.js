// Events & EventEmitter in Node JS

import events from "events";

const eventEmitter = new events.EventEmitter();

eventEmitter.on("start", (start, end) => {
  console.log(`${start} to ${end}`);
});

eventEmitter.emit("start", "A", "Z");
