console.log("Client side javascript");

// fetch("https://puzzle.mead.io/puzzle").then((res) => {
//   res.json().then((data) => {
//     console.log(data);
//   });
// });

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  console.log(location);

  fetch(`http://localhost:5000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data.address);
          console.log(data.forecast);
        }
      });
    }
  );
});
