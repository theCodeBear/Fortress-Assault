
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

    // cerate map
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


    this.createItems();
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


  findObjectsByType: function(type, map, layer) {
    var result = new Array();
    map.objects[layer].forEach(function(element) {
      if (element.properties.type === type) {
        //Phaser uses top left, Tiled bottom left so we have to adjust the y position
        element.y -= map.tileHeight;
        result.push(element);
      }
    });
    return result;
  },

  createFromTiledObject: function(element, group) {
    var sprite = group.create(element.x, element.y, 'gameTiles');//element.properties.sprite);
    sprite.frame = (element.gid-1);  // the frame in the spritesheet starts at zero instead of 1, so it's the object's gid - 1
    // copy all properties to the sprite
    Object.keys(element.properties).forEach(function(key) {
      sprite[key] = element.properties[key];
    });
  },

  createItems: function() {
    this.items = game.add.group();
    this.items.enableBody = true;
    result = this.findObjectsByType('item', this.map, 'Object Layer 1');
    result.forEach(function(element) {
      this.createFromTiledObject(element, this.items);
    }, this);
    this.items.setAll('body.allowGravity', false);
  },

  createPlayer: function() {
    var result = this.findObjectsByType('playerStart', this.map, 'Object Layer 1');
    // we know there is just one result
    this.player = this.game.add.sprite(result[0].x, result[0].y, mainCharacter.name);
    this.game.physics.arcade.enable(this.player);
  },

  collect: function(player, collectable) {
    console.log('yummy');
    collectable.destroy();
  }


}

game.state.add('main', mainState);
game.state.start('main');
