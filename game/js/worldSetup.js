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
    // state.platforms = game.add.group();
    // state.platforms.enableBody = true;
    // game.add.sprite(100, 100, 'platform', 0, state.platforms);
    // game.add.sprite(100, 600, 'platform', 0, state.platforms);
    // game.add.sprite(400, 650, 'platform', 0, state.platforms);
    // game.add.sprite(580, 650, 'platform', 0, state.platforms);
    // //floor
    // game.add.sprite(0, 680, 'platform', 0, state.platforms);
    // game.add.sprite(175, 680, 'platform', 0, state.platforms);
    // game.add.sprite(350, 680, 'platform', 0, state.platforms);
    // game.add.sprite(525, 680, 'platform', 0, state.platforms);
    // game.add.sprite(700, 680, 'platform', 0, state.platforms);
    // game.add.sprite(875, 680, 'platform', 0, state.platforms);

    // // 16x16 square
    // state.square = game.add.sprite(400,600, 'square');
    // game.physics.arcade.enable(state.square);
    // state.square.enableBody = true;
    // state.square.body.allowGravity = false;
    // state.square.body.immovable = true;

    // state.platforms.setAll('body.allowGravity', false);
    // state.platforms.setAll('body.immovable', true);
  },

  createPlayer: function(state) {
    // state.player = game.add.sprite(200,200, mainCharacter.name);
    // state.player.scale.setTo(mainCharacter.scale.x, mainCharacter.scale.y);
    // game.physics.arcade.enable(state.player);
    // state.player.enableBody = true;
    // state.player.body.collideWorldBounds = true;

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