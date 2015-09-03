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
   this._resolverKeyUp = this.bindKeyUp.bind(this);
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

Instructions.prototype.bindKeyUp = function (ev) {
   if (ev.keyCode == 13) { //DOWN
      this.stageManager.goTo("Title");
   }
};

Instructions.prototype.bindEvents = function () {
   var self = this;
   console.log("EEEEEE");
   document.body.addEventListener('keyup', this._resolverKeyUp);
};

Instructions.prototype.off = function () {
   document.body.removeEventListener('keyup', this._resolverKeyUp ); 
};

Instructions.prototype.render = function (context) {
   this.renderButtons(context);
   context.font = '42px Impact';
   context.fillStyle = "#fff";
   context.fillText("Reverse Instructions", 106, 100); 
   context.font = '12px Arial';
   context.fillText("Voce ira fazer parte de um experimento em laboratorio onde iremos testar um dispositivo revolucionario.", 50, 100);
   context.fillText("Voce ira fazer parte de um experimento em laboratorio onde iremos testar um dispositivo revolucionario.", 50, 115);
   context.fillText("Voce ira fazer parte de um experimento em laboratorio onde iremos testar um dispositivo revolucionario.", 50, 130);
   context.fillStyle = "#c3c3c3";
   context.fillRect(50, 150, 100, 100);
   context.fillRect(160, 150, 100, 100);
   context.fillRect(270, 150, 100, 100);
   context.fillRect(380, 150, 100, 100);
   context.fillStyle = "#fff";
   context.fillText("Aperte Space para ativar/desativar o Reverse", 50, 150);
   context.fillText("Cuidado! Isto Mata", 160, 150);
   context.fillText("As portas lhe levarão a saida do laboratorio", 270, 150);
   context.fillText("Os sentinelas também matam, cuidado!", 380, 150);

};
