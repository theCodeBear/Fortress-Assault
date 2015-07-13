
var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, '');

var mainState = {

/**************** PROPERTIES ****************/



/**************** PRELOAD ****************/

  preload: function() {
    game.load.image(mainCharacter.name, mainCharacter.sprite);
    game.load.image('block', 'assets/img/blackTile.png');
    game.load.image('platform', 'assets/img/orangePlatform.png');
    game.load.image('square', 'assets/img/brownSquare.png');
    game.time.advancedTiming = true;  // this is need to print out fps in render function


    game.load.tilemap('level1', 'assets/tilemaps/firstTileMap.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.spritesheet('gameTiles', 'assets/img/tileset.png', 16, 16);
  },



/**************** CREATE ****************/

  create: function() {
    worldSetup.setupScreen(this);
    worldSetup.buildPlatforms(this);
    worldSetup.createPhysics();
    
    worldSetup.registerInputs(this);
    // game.camera.follow(this.player);

    // attempt at fixing zooming
    // this.collection = [
    //   this.platforms, this.player
    // ];

    // create map
    this.map = this.game.add.tilemap('level1');
    // first parameter is the what I called the tileset name in Tilded, second parameter is the key to the asset as specified above in preload()
    this.map.addTilesetImage('scifi_platformTiles_16x16', 'gameTiles');
    // create layer
    this.blockedLayer = this.map.createLayer('Tile Layer 1');
    // set layer for collisions (start tile, end tile, collides, layer)
    // note that end tile will be the highest number in the json file (i think??)
    this.map.setCollisionBetween(1, 4000, true, 'Tile Layer 1');
    // resize the game world to match the layer dimensions
    // this.blockedLayer.resizeWorld();


    items.create(this);
    // this.createPlayer();
    worldSetup.createPlayer(this);
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
  },

};

game.state.add('main', mainState);
game.state.start('main');
