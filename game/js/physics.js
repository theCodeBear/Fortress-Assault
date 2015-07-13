/* PHYSICS RELATED FUNCTIONS */

var physics = {
  
  // call: physics.checkAllCollisions(this);
  checkAllCollisions: function(state) {
    game.physics.arcade.collide(state.player, state.blockedLayer);
    game.physics.arcade.overlap(state.player, state.items, items.collectOne, null, state);
  }

};