/*
Exercise 6
12.08.22


Check the Weather, Part 2

Take your code from the previous Check the Weather exercise and rewrite it as a switch statement. Feel free to add more cases besides 'sunny' and 'rainy'.
*/

let weather = "rainy";

switch (weather) {
  case "sunny":
    console.log(`It's a beautiful day!`);
    break;
  case "rainy":
    console.log(`Grab your umbrella.`);
    break;
  case "windy":
    console.log(`It's very windy today!`);
    break;
  default:
    console.log(`Let's stay inside.`);
}
