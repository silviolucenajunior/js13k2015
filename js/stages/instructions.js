function Instructions (stageManager) {
   this.stageManager = stageManager;
}

Instructions.prototype.init = function init() {
   this.buttons = [
      {
         title: 'Start'
      },
      {
         title: 'Instructions'
      }
   ];
   this.buttonWidth = 200;
   this.buttonHeight = 100;
   this.selectedButtonIndex = 0; //0 based index
   this.bindEvents();
};

Instructions.prototype.renderButtons = function (context) {
   var _baseX = (800 / 2) - (this.buttonWidth / 2);
   var _baseY = (600 / 2) - (this.buttonHeight / 2);
   context.fillStyle = "#fff";
   context.fillRect(0, 0, 210, 70);
   context.fillStyle = "#c3c3c3";
   context.fillRect(5, 5, 210, 70);
};

Instructions.prototype.bindEvents = function () {
   var self = this;
   console.log("EEEEEE");
   document.body.addEventListener('keyup', function (ev) {
      if (ev.keyCode == 13) { //DOWN
         this.stageManager.goTo("Title");
      }
   }.bind(this));
};

Instructions.prototype.render = function (context) {
   this.renderButtons(context);
   context.font = '42px Impact';   
   context.fillStyle = "#fff";
   context.fillText("Reverse Instructions", 106, 100); 
};
