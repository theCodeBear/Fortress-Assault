var mainCharacter = {

  name: 'xxx',
  run: 0,
  moveSpeed: 150,
  jump: 400,
  movingHoriz: '',
  movingVert: '',
  sprite: 'assets/img/greenDiskBase.png',
  scale: { x: 0.35, y: 0.35 },

  // call: mainCharacter.move(this);
  move: function(state) {
    // run
    state.runKey.isDown ? this.run = 2 : this.run = 1;
    // jump
    if (state.cursors.up.isDown/* && state.player.body.touching.down*/) {
      state.player.body.velocity.y = -this.jump;
    }
    // moving horizontally
    if (state.player.body.touching.down) {
      if (state.cursors.left.isDown && this.movingHoriz !== 'RIGHT') {
        state.player.body.velocity.x = -this.moveSpeed * this.run;
        this.movingHoriz = 'LEFT';
      } else if (state.cursors.right.isDown && this.movingHoriz !== 'LEFT') {
        state.player.body.velocity.x = this.moveSpeed * this.run;
        this.movingHoriz = 'RIGHT';
      } else if (!state.cursors.right.isDown || !state.cursors.left.isDown) {
        this.movingHoriz = 'NONE';
        state.player.body.velocity.x *= 0.8;   // slows the character to a stop when user not trying to move
      }
    } else {
      if (state.cursors.left.isDown && this.movingHoriz !== 'RIGHT') {
        if (state.player.body.velocity.x >=0) state.player.body.velocity.x += -100;
        this.movingHoriz = 'LEFT';
      } else if (state.cursors.right.isDown && this.movingHoriz !== 'LEFT') {
        if (state.player.body.velocity.x <=0) state.player.body.velocity.x += 100;
        this.movingHoriz = 'RIGHT';
      } else if (!state.cursors.right.isDown || !state.cursors.left.isDown) {
        this.movingHoriz = 'NONE';
        state.player.body.velocity.x *= 0.97;   // slows the character to a stop in air when user not trying to move
      }
    }
  }

};