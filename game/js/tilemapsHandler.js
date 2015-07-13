var tilemapsHandler = {

  // call: tilemapsHandler.findObjectsByType(type, map, layer);
  // where type is the value of the key 'type' that you set as one of the
  // object properties on that tile in Tiled (when you double click the Object),
  // map is the reference to the variable from game.add.tilemap(''), and layer
  // is the string which is the name of the Object layer in your Tiled map.
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

  // call: tilemapsHandler.createFromTiledObject(element, group);
  // where element is each element of the array returned by findObjectsByType(),
  // and group is the variable that you assigned game.add.group() to.
  createFromTiledObject: function(element, group) {
    var sprite = group.create(element.x, element.y, 'gameTiles');//element.properties.sprite);
    sprite.frame = (element.gid-1);  // the frame in the spritesheet starts at zero instead of 1, so it's the object's gid - 1
    // copy all properties to the sprite
    Object.keys(element.properties).forEach(function(key) {
      sprite[key] = element.properties[key];
    });
  }

};