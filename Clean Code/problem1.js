let text = "";

const locations = ['Austin', 'New York', 'San Francisco'];
locations.forEach((item, index) => {
  text += index + ": " + item + "\n";
});

console.log(text);