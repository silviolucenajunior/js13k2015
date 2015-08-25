function GUI () {

}

GUI.prototype.renderPlayerLifes = function (context, player) {
   context.font = '42px Impact';
   context.fillStyle = 'white';
   context.fillText(player.lifes, 10, 100);
};
