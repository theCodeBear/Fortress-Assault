var items = {

  // call: items.create(this);
  create: function(state) {
    state.items = game.add.group();
    state.items.enableBody = true;
    result = tilemapsHandler.findObjectsByType('item', state.map, 'Object Layer 1');
    result.forEach(function(element) {
      tilemapsHandler.createFromTiledObject(element, state.items);
    }, state);
    state.items.setAll('body.allowGravity', false);
  },

  // call: items.collectOne(player, collectable);
  // where player is the variable that references the player sprite,
  // and collectable is the varaible that references the sprite for the item to be collected
  collectOne: function(player, collectable) {
    console.log('yummy');
    collectable.destroy();
  }

};