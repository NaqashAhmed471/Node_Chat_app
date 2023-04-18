const fs = require("fs");
// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };

// const bookJson = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJson);

// const dataBuffer = fs.readFileSync("1-json.json");
// const data = dataBuffer.toString();
// const parseData = JSON.parse(data);
// console.log(parseData);

const dataBuffer = fs.readFileSync("1-json.json");
const data = dataBuffer.toString();
const parseData = JSON.parse(data);

parseData.name = "Naqash";

const dataJson = JSON.stringify(parseData);
fs.writeFileSync("1-json.json", dataJson);
