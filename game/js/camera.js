var camera = {

  // call: camera.scroll(this);
  scroll: function(state) {
    if (state.player.x - game.camera.x >= SCROLL_RIGHT_AT) {
      game.camera.x = state.player.x - SCROLL_RIGHT_AT;
    } else if (state.player.x - game.camera.x <= SCROLL_LEFT_AT) {
      game.camera.x = state.player.x - SCROLL_LEFT_AT;
    }
  },

  // call: camera.zoom(this);
  zoom: function(state) {
    if (state.zoomIn.isDown && !(game.world.scale.x > 2)) {
      game.world.scale.x += 0.01;
      game.world.scale.y += 0.01;
    } else if (state.zoomOut.isDown && !(game.world.scale.x < 0.4)) {
      game.world.scale.x -= 0.01;
      game.world.scale.y -= 0.01;
    }
  }

};