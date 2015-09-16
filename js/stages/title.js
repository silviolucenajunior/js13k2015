function Title (stageManager) {
   this.stageManager = stageManager;
}

Title.prototype.init = function init() {
   
   this.buttons = [
      {
         title: 'START'
      },
      {
         title: 'INSTRUCTIONS'
      }
   ];
   this.buttonWidth = 200;
   this.buttonHeight = 100;
   this.selectedButtonIndex = 0; //0 based index
   
   this._resolverKeyUp = this.bindKeyUp.bind(this);
   this.bindEvents();

};

Title.prototype.bindKeyUp = function (ev) {
   if (ev.keyCode == 38) { //UP
         this.selectedButtonIndex = 0;
      }

      if (ev.keyCode == 40) { //DOWN
         this.selectedButtonIndex = 1;
      }

      if (ev.keyCode == 13) { //ENTER
         if (this.selectedButtonIndex === 0) {
            this.stageManager.goTo("Stage1");
            this.stageManager.main.player = new Player(this.stageManager.main);
         } else {
            this.stageManager.goTo("Instructions");
         }
      }
};

Title.prototype.bindEvents = function () {
   var self = this;
   document.body.addEventListener('keyup', this._resolverKeyUp );
};

Title.prototype.off = function () {
   document.body.removeEventListener('keyup', this._resolverKeyUp ); 
};

Title.prototype.renderButtons = function (context) {
   var _baseX = (800 / 2) - (this.buttonWidth / 2);
   var _baseY = (600 / 2) - (this.buttonHeight / 2);
   context.fillStyle = "#2E2D2D";
   context.fillRect(_baseX - 9, _baseY - 9, 218, 148);
   context.fillStyle = "#c3c3c3";
   context.fillRect(_baseX - 5, _baseY + (this.selectedButtonIndex * 70) - 5, 210, 70);
   context.font = '32px Impact';
   for (var i = 0, count = this.buttons.length; i < count; i++) {
      context.fillStyle = "#5C5A5A";
      context.fillRect(_baseX, _baseY + (i * 70), 200, 60);
      context.fillStyle = "#000";
      context.fillText(this.buttons[i].title, _baseX + ((200 - context.measureText(this.buttons[i].title).width) / 2), _baseY + (i * 70) + 40);
      if (i === this.selectedButtonIndex) {
         context.strokeStyle = "#c3c3c3";
         context.strokeText(this.buttons[i].title, _baseX + ((200 - context.measureText(this.buttons[i].title).width) / 2), _baseY + (i * 70) + 40);
      }
   }
};

Title.prototype.render = function (context) {
   context.clearRect(0, 0, 800, 600);
   context.fillStyle = 'black';
   context.fillRect(0, 0, 800, 600);
   this.renderButtons(context);
   context.font = '72px Impact';
   
   context.fillStyle = "#fff";
   context.strokeStyle = "#fff";
   context.strokeText("REVERSE LABS", (400 - (context.measureText("REVERSE LABS").width / 2)), 100);
   
};
