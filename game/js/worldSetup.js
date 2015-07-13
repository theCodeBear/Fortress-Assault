/* FUNCTIONS FOR SETTING UP THE INITIAL STATE OF THE GAME IN THE mainState CREATE METHOD */

var worldSetup = {

  setupScreen(state) {
    game.scale.fullScreenTarget = state.parentElement;
    // game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL; // Important
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#392098'
  },

  createPhysics: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.setBounds(0,0, GAME_WIDTH*3, GAME_HEIGHT);
    game.physics.arcade.gravity.y = WORLD_GRAVITY;
  },

  createPlayer: function(state) {
    var result = tilemapsHandler.findObjectsByType('playerStart', state.map, 'Object Layer 1');
    // we know there is just one result
    state.player = game.add.sprite(result[0].x, result[0].y, mainCharacter.name);
    game.physics.arcade.enable(state.player);
    state.player.scale.setTo(mainCharacter.scale.x, mainCharacter.scale.y);
    game.physics.arcade.enable(state.player);
    state.player.enableBody = true;
    state.player.body.collideWorldBounds = true;
  },

  registerInputs: function(state) {
    state.cursors = game.input.keyboard.createCursorKeys();
    state.zoomInKey = game.input.keyboard.addKey(keys.ZOOM_IN.keycode);
    state.zoomOutKey = game.input.keyboard.addKey(keys.ZOOM_OUT.keycode);
    state.runKey = game.input.keyboard.addKey(keys.RUN.keycode);
  }

};