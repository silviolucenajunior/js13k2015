function GameOver (stageManager) {
   this.stageManager = stageManager;
}


GameOver.prototype.render = function (context) {
   console.log("GAMEOVER");
   context.font = '42px Impact';
   context.fillStyle = "red";
   var _tempTextWidth = context.measureText("Mission Failed").width;
   context.fillText("Mission Failed", (800 / 2 - _tempTextWidth / 2), 100); 
   context.font = '12px Arial';
   context.fillStyle = "#fff";
   _tempTextWidth = context.measureText("Refresh browser to try again").width;
   context.fillText("Refresh browser to try again", (800 / 2 - _tempTextWidth / 2), 150); 
};
