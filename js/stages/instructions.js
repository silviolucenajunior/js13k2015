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
   context.fillRect(700, 500, 210, 70);
   context.fillStyle = "#c3c3c3";
   context.fillRect(700, 500, 210, 70);
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
   context.font = '42px Impact';
   context.fillStyle = "#fff";
   var _tempTextWidth = context.measureText("Instructions").width;
   context.fillText("Instructions", (800 / 2 - _tempTextWidth / 2), 100); 
   context.font = '12px Arial';
   context.fillText("Voce ira fazer parte de um experimento em laboratorio onde iremos testar um dispositivo revolucionario.", 50, 150);
   context.fillText("Ainda nao estamos certos sobre tudo o que ele pode fazer, entao é sua missão descobrir e fazer um relatorio.", 50, 165);
   context.fillText("Eis abaixo algumas coisas que voc^e precisa saber para sobre sua missão.", 50, 180);
   context.fillText("Para retornar a tela de Titulo aperte ENTER", 50, 500);
   context.fillText("Boa Sorte! Contamos com você.", 50, 512);
   context.fillStyle = "#c3c3c3";
   var _boxBaseX = (800 / 2) - (((4 * 100) + (3 * 10)) / 2); //(screenWidth / 2) - ((numberOfBlocks * blockWidth) + ((numberOfBlocks - 1) * gap)) to centralize
   var _boxBaseY = 350; //Arbitrary value
   var _margin = 0;
   for (var i = 0, count = 4; i < count; i++) {
      context.fillRect(_boxBaseX + (i * 100) + (10 * i), _boxBaseY, 100, 100);
   }
   context.fillStyle = "blue";
   context.fillRect(_boxBaseX + 5, _boxBaseY + 10, 90, 10); //Draw blue line
   context.fillStyle = "red";
   context.fillRect(_boxBaseX + 100 + 10 + 40, _boxBaseY + 10, 20, 30); //Draw red rectangle
   context.fillStyle = "green";
   context.beginPath();
   context.moveTo(_boxBaseX + 100 + 10 + 100 + 10 + 35, _boxBaseY + 40);
   context.lineTo(_boxBaseX + 100 + 10 + 100 + 10 + 50, _boxBaseY + 10);
   context.lineTo(_boxBaseX + 100 + 10 + 100 + 10 + 65, _boxBaseY + 40);
   context.fill();

   context.fillStyle = "#000";
   context.beginPath();
   context.moveTo(_boxBaseX + 100 + 10 + 100 + 10 + 100 + 10 + 5, _boxBaseY + 40);
   context.lineTo(_boxBaseX + 100 + 10 + 100 + 10 + 100 + 10 + 20, _boxBaseY + 10);
   context.lineTo(_boxBaseX + 100 + 10 + 100 + 10 + 100 + 10 + 35, _boxBaseY + 40);
   context.fill();
   context.beginPath();
   context.moveTo(_boxBaseX + 100 + 10 + 100 + 10 + 100 + 10 + 40, _boxBaseY + 10);
   context.lineTo(_boxBaseX + 100 + 10 + 100 + 10 + 100 + 10 + 55, _boxBaseY + 40);
   context.lineTo(_boxBaseX + 100 + 10 + 100 + 10 + 100 + 10 + 70, _boxBaseY + 10);
   context.fill();

   context.fillStyle = "#fff";
   context.fillText("Cuidado.", _boxBaseX + 5, _boxBaseY + 70);
   context.fillText("Isto Mata", _boxBaseX + 5, _boxBaseY + 82);

   context.fillText("As portas lhe levarão", _boxBaseX + 100 + 10 + 5, _boxBaseY + 70);
   context.fillText("a saida do laboratorio", _boxBaseX + 100 + 10 + 5, _boxBaseY + 82);

   context.fillText("Existem sentinelas, ", _boxBaseX + 100 + 10 + 100 + 10 + 5, _boxBaseY + 70);
   context.fillText("cuidado, eles matam", _boxBaseX + 100 + 10 + 100 + 10 + 5, _boxBaseY + 82);

   context.fillText("As portas lhe levarão", _boxBaseX + 100 + 10 + 100 + 10 + 100 + 10 + 5, _boxBaseY + 70);
   context.fillText("a saida do laboratorio", _boxBaseX + 100 + 10 + 100 + 10 + 100 + 10 + 5, _boxBaseY + 82);
};
