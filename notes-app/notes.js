const fs = require("fs");
const chalk = require("chalk");

const listNotes = () => {
  const notes = loadNotes();

  return notes.forEach((note) => {
    return console.log(chalk.bgGreen(note.title));
  });
};

const addNotes = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
  } else {
    console.log("Note Already Taken!");
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const bufferData = fs.readFileSync("notes.json");
    const data = bufferData.toString();
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });

  if (notesToKeep.length !== notes.length) {
    saveNotes(notesToKeep);
    console.log(chalk.bgGreen("Note Removed!"));
  } else {
    console.log(chalk.bgRed("No Note Found!"));
  }
};

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => {
    return note.title === title;
  });

  if (note) {
    console.log(chalk.bgGreen(note.title));
    console.log(chalk.bgGreen(note.body));
  } else {
    console.log(chalk.bgRed("No Note Found!"));
  }
};

module.exports = { listNotes, addNotes, removeNote, readNote };
