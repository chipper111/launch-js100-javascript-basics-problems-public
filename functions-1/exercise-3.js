/*
Exercise 3
12.09.22

Let's generalize the function from the previous exercise a bit. Implement a function cite that takes two string arguments: the author of the quote and what they said. It then logs the quote to the console, as in the following example.
*/

let cite = (name, quote) => console.log(`${name} said: "${quote}."`);

cite("Brendan Eich", "Always bet on JavaScript.");
// logs:
// Brendan Eich said: "Always bet on JavaScript."
