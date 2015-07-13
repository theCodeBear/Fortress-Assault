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
  handleZoom: function(state) {
    if (state.zoomInKey.isDown && !(game.world.scale.x > 2)) {
      game.world.scale.x += 0.01;
      game.world.scale.y += 0.01;
      // console.log(state.player.scale.x);
      // Phaser.scaleManager.scaleSprite(state.player);
      // state.player.scale.setTo(state.player.scale.x+0.005, state.player.scale.y+0.005);
      // state.platforms.scale.setTo(state.platforms.scale.x+0.01, state.platforms.scale.y+0.01);
    } else if (state.zoomOutKey.isDown && !(game.world.scale.x < 0.4)) {
      game.world.scale.x -= 0.01;
      game.world.scale.y -= 0.01;
      // state.player.scale.setTo(state.player.scale.x-0.005), state.player.scale.y-0.05;
      // state.player.scale.setTo(state.player.scale.x-(state.player.scale.x*(1/100)), state.player.scale.y-(state.player.scale.y*(1/100)));
      // state.platforms.scale.setTo(state.platforms.scale.x-0.01, state.platforms.scale.y-0.01);
    }
  }

};