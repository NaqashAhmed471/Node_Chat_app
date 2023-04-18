const greeter = (name = "user") => {
  console.log("Hello" + name);
};
greeter("Ali"); // Hello Ali
greeter(); // Hello user

const product = {
  label: "Red",
  stoke: 1,
};

const shop = ({ label = "Color", stoke = 0 } = {}) => {
  console.log(label, stoke);
};
shop(product); // Red 1
shop(); // Color 0
