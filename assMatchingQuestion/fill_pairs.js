/*
Fill Pairs Dropdowns with texts of Definitions/Terms
Zuordnungspaare-Selektoren mit den Texten der Definitionen und Terme ersetzen
*/
(function(){
  var defCounter = 0;
  var termCounter = 0;
  var pairsCounter = 0;
  var elem;
  var defs = [], terms = [];
  while ((elem = document.getElementsByName("definitions[answer][" + defCounter + "]")).length > 0) {
    defs.push(elem[0].getAttribute("value"));
    defCounter++;
  }
  while ((elem = document.getElementsByName("terms[answer][" + termCounter + "]")).length > 0) {
    terms.push(elem[0].getAttribute("value"));
    termCounter++;
  }
  while ((elem = document.getElementsByName("pairs[definition][" + pairsCounter + "]")).length > 0) {
    for (var def=0; def < defCounter; def++) {
      elem[0].children[def+1].text=defs[def];
    }
    elem = document.getElementsByName("pairs[term][" + pairsCounter + "]")
    for (var term=0; term < termCounter; term++) {
      elem[0].children[term+1].text=terms[term];
    }
    pairsCounter++;
  }
})()

