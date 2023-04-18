const chalk = require("chalk");
const { argv } = require("process");
const yargs = require("yargs");
const { listNotes, addNotes, removeNote, readNote } = require("./notes");

// customize yargs version
yargs.version("1.1.0");

// add note
yargs.command({
  command: "add",
  describe: "Add a new Note",
  builder: {
    title: {
      describe: "Note title",
      defaultOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      defaultOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    addNotes(argv.title, argv.body);
  },
});

// remove note
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      defaultOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    removeNote(argv.title);
  },
});

// list note
yargs.command({
  command: "list",
  describe: "List note!",
  handler: function () {
    listNotes();
  },
});

// read note
yargs.command({
  command: "read",
  describe: "Read a note!",
  builder: {
    title: {
      describe: "Read title",
      defaultOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    readNote(argv.title);
  },
});

console.log(yargs.argv);
