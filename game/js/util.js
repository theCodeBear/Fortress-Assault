/* UTILITY FUNCTIONS */

var util = {

  // call: util.printKeycodePressed(this);
  printKeycodePressed: function(state) {
    game.input.keyboard.onDownCallback = function(e) {
      console.log('keycode:', e.keyCode);
    }
  }

};