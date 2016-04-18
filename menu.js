// begin with a blank/new order
var order = '';


// build a function to ask questions

function question(questionText, answerText, alt) {
 var answer1 = prompt(questionText);
 if(answer1.toUpperCase()=== answerText){
 order += answerText + " + "}
 else{
   order+= alt+ " + "
 }
}

// call the QUESTION function with the order options
question("Brown or white rice?", "BROWN", "WHITE");
question("Brown or black beans?", "BROWN", "BLACK");
question("Guac or no guac?", "GUAC", "NO GUAC");
question("Veggies or no veggies?", "VEGGIES", "NO VEGGIES");
question("Salsa or no salsa?", "SALSA", "NO SALSA");

// output their order
document.write("<p>You ordered: " + order + "<p>");
