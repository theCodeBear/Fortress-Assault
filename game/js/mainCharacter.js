var mainCharacter = {

  name: 'xxx',
  moveSpeed: 250,
  jump: 400,
  movingHoriz: 0,
  movingVert: 0,
  sprite: 'img/greenDiskBase.png',
  scale: { x: 0.5, y: 0.5 },

  // call: mainCharacter.move(this);
  move: function(state) {
    // jump
    if (state.cursors.up.isDown && state.player.body.touching.down) {
      state.player.body.velocity.y = -this.jump;
    }
    // moving horizontally
    if (state.cursors.left.isDown && this.movingHoriz !== 1) {
      state.player.body.velocity.x = -this.moveSpeed;
      this.movingHoriz = -1;
    } else if (state.cursors.right.isDown && this.movingHoriz !== -1) {
      state.player.body.velocity.x = this.moveSpeed;
      this.movingHoriz = 1;
    } else if (!state.cursors.right.isDown || !state.cursors.left.isDown) {
      this.movingHoriz = 0;
      state.player.body.velocity.x *= 0.8;   // slows the character to a stop when not moving
    }
  }

};