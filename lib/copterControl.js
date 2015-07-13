'use strict';

function copterControl(copter, keypress){
  var options = {
    speed: 20,
    steps: 9
  };

  switch(keypress){
    case 87:
      //w
      copter.forward(options);
      break;
    case 65:
      //a
      copter.left(options);
      break;
    case 83:
      //s
      copter.backward(options);
      break;
    case 68:
      copter.right(options);
      break;
    case 38:
      //up
      copter.up(options);
      break;
    case 40:
      //down
      copter.down(options);
      break;
    case 37:
      //left
      copter.turnLeft(options);
      break;
    case 39:
      //right
      copter.turnRight(options);
      break;
    case 81:
      //q
      copter.takeOff(options);
      break;
    case 69:
      copter.land(options);
      break;
  }
}

module.exports = copterControl;
