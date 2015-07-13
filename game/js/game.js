
var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, '');

var mainState = {

/**************** PROPERTIES ****************/



/**************** PRELOAD ****************/

  preload: function() {
    game.load.image(mainCharacter.name, mainCharacter.sprite);
    game.load.image('block', 'img/blackTile.png');
    game.load.image('platform', 'img/orangePlatform.png');
    game.time.advancedTiming = true;  // this is need to print out fps in render function
  },



/**************** CREATE ****************/

  create: function() {
    worldSetup.setupScreen(this);
    worldSetup.buildPlatforms(this);
    worldSetup.createPhysics();
    worldSetup.createPlayer(this);
    worldSetup.registerInputs(this);
    // game.camera.follow(this.player);

    // attempt at fixing zooming
    // this.collection = [
    //   this.platforms, this.player
    // ];
  },



/**************** UPDATE ****************/

  update: function() {

    camera.scroll(this);    
    physics.checkAllCollisions(this);

    camera.handleZoom(this);

    mainCharacter.move(this);

  },


/**************** RENDER ****************/

  render: function() {
    game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");
  }
}

game.state.add('main', mainState);
game.state.start('main');
