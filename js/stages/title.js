function Title (stageManager) {
   this.stageManager = stageManager;
}

Title.prototype.init = function init() {
   
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

Title.prototype.bindKeyUp = function (ev) {
   console.log("OOOW");
   if (ev.keyCode == 38) { //UP
         this.selectedButtonIndex = 0;
      }

      if (ev.keyCode == 40) { //DOWN
         this.selectedButtonIndex = 1;
      }

      if (ev.keyCode == 13) { //DOWN
         if (this.selectedButtonIndex === 0) {
            this.stageManager.goTo("Stage1");
         } else {
            this.stageManager.goTo("Instructions");
         }
      }
};

Title.prototype.bindEvents = function () {
   var self = this;
   document.body.addEventListener('keyup', this.bindKeyUp.bind(this));
};

Title.prototype.off = function () {
   document.body.removeEventListener('keyup', this.bindKeyUp.bind(this)); 
};

Title.prototype.renderButtons = function (context) {
   var _baseX = (800 / 2) - (this.buttonWidth / 2);
   var _baseY = (600 / 2) - (this.buttonHeight / 2);
   context.fillStyle = "#fff";
   context.fillRect(_baseX - 5, _baseY + (this.selectedButtonIndex * 70) - 5, 210, 70);
   context.fillStyle = "#c3c3c3";
   for (var i = 0, count = this.buttons.length; i < count; i++) {
      context.fillRect(_baseX, _baseY + (i * 70), 200, 60);
   }
   
      //context.stroke();
};

Title.prototype.render = function (context) {
   context.clearRect(0, 0, 800, 600);
   context.fillStyle = 'black';
   context.fillRect(0, 0, 800, 600);
   this.renderButtons(context);
   context.font = '42px Impact';
   
   context.fillText("Reverse Lab", 106, 100);
   context.fillStyle = "cyan";
   context.fillText("Reverse Lab", 109, 100);
   context.fillStyle = "#fff";
   context.fillText("Reverse Lab", 103, 100);
   context.fillStyle = "red";
};
