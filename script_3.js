//Mario Pyramide

let stage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
function createHalfPyramid (stage) {
  
  for (var i = 1; i <= stage; i++) {
    var row = '';
    
    for (var j = 1; j <= (stage - i); j++) {
      row += ' ';
    }
    
    for (var k = 1; k <= i; k++) {
      row += '*';
    }
    
    console.log(row);
  }
}

createHalfPyramid(stage);