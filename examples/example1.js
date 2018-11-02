// Using Node
var $ = require("../dist/node.js");

a = $("p")
a.forEach(function(b) {
  console.log(b.innerHTML)     // Gets all `p` tags text
}
a.text("a") // Sets all tags matching `p`'s text to "a"




a.text-color("green") // Sets all p tags text color to `green`
