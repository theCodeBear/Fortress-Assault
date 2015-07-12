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

  buildPlatforms: function(state) {
    state.platforms = game.add.group();
    state.platforms.enableBody = true;
    game.add.sprite(100, 100, 'platform', 0, state.platforms);
    game.add.sprite(100, 600, 'platform', 0, state.platforms);
    game.add.sprite(400, 650, 'platform', 0, state.platforms);
    state.platforms.setAll('body.allowGravity', false);
    state.platforms.setAll('body.immovable', true);
  },

  createPlayer: function(state) {
    state.player = game.add.sprite(200,200, mainCharacter.name);
    state.player.scale.setTo(0.5,0.5);
    game.physics.arcade.enable(state.player);
    state.player.enableBody = true;
    state.player.body.collideWorldBounds = true;
  },

  registerInputs: function(state) {
    state.cursors = game.input.keyboard.createCursorKeys();
    state.zoomIn = game.input.keyboard.addKey(keys.ZOOM_IN.keycode);
    state.zoomOut = game.input.keyboard.addKey(keys.ZOOM_OUT.keycode);
  }

};