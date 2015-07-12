/* PHYSICS RELATED FUNCTIONS */

var physics = {
  
  // call: physics.checkAllCollisions(this);
  checkAllCollisions: function(state) {
    game.physics.arcade.collide(state.player, state.blocks);
    game.physics.arcade.collide(state.player, state.platforms);
  }

};