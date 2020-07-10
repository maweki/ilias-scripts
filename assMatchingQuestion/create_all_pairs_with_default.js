// Create all possible pairs with a default points value
(function(){
  var punkte = window.prompt("Default-Punktzahl",-0.25);
  var defCounter = 0;
  var termCounter = 0;

  while ((elem = document.getElementsByName("definitions[answer][" + defCounter + "]")).length > 0) {
    defCounter++;
  }
  var noDef = defCounter;
  while ((elem = document.getElementsByName("terms[answer][" + termCounter + "]")).length > 0) {
    termCounter++;
  }
  var noTerm = termCounter;

  var rowCounter = 0;
for (var def=0;def < noDef;def++) {
  for(var term=0;term<noTerm;term++) {
    document.getElementById("add_pairs[" + rowCounter + "]").click();
    document.getElementsByName("pairs[definition]["+ rowCounter+"]")[0]
    .children[def+1]
    .selected = true;

    document.getElementsByName("pairs[definition]["+ rowCounter+"]")[0]
    .children[def+1]
    .text=document.getElementsByName("definitions[answer]["+def+"]")[0]
    .value;

    document.getElementsByName("pairs[term]["+ rowCounter+"]")[0]
    .children[term+1]
    .selected = true;

    document.getElementsByName("pairs[term]["+ rowCounter+"]")[0]
    .children[term+1]
    .text=document.getElementsByName("terms[answer]["+term+"]")[0]
    .value;

    document.getElementsByName("pairs[points]["+ rowCounter+"]")[0]
    .setAttribute("value",punkte);

    rowCounter++;
  }
}
document.getElementById("remove_pairs[" + rowCounter + "]").click();
})();
