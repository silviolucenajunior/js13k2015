function EndGame (stageManager) {
   this.stageManager = stageManager;
}


EndGame.prototype.render = function (context) {
   context.font = '42px Impact';
   context.fillStyle = "green";
   var _tempTextWidth = context.measureText("Mission Complete!!!").width;
   context.fillText("Mission Complete!!!", (800 / 2 - _tempTextWidth / 2), 100); 
   context.font = '12px Arial';
   context.fillStyle = "#fff";
   _tempTextWidth = context.measureText("You did a great job and the device turned out better than we expected.").width;
   context.fillText("You did a great job and the device turned out better than we expected.", (800 / 2 - _tempTextWidth / 2), 150);
   _tempTextWidth = context.measureText("To play again refresh the browser.").width; 
   context.fillText("To play again refresh the browser.", (800 / 2 - _tempTextWidth / 2), 164);

};
