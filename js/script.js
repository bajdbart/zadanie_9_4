function drawTree(height) {
  for(var i = 1; i <= height; i++) {

    var space =''
    for (var k = 0 ; k < height ; k++) {
      space += ' '
    }

    var star ="";
    for (var j = 0; j < i; j++){
      var str2 = space.substring(1,(height-j));
      star += '*';
    } console.log(str2 + star + star);
  }
}

drawTree(15);
