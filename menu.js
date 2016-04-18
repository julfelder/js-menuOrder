// begin with a blank/new order
var order = '';


// build a function to ask questions

function question(questionText, answer, other) {
  var answer1 = prompt(questionText);
  if (answer1==to.UpperCase()== answer){
    order += answer+ " + "}
  else{ 
  order += other + " + "
  
}
  
}

// call the QUESTION function with the order options
question("what kind of rice?", "WHITE", "BROWN");
question("What kind of beans?", "BROWN", "BLACK");
question("Beef or Chicken?", "BEEF", "CHICKEN");
question("Guac?", "YES", "NO GUAC");
question("Salsa?", "YES","NO SALSA" );
// output their order
document.write("<p>You ordered: " + order + "<p>");
