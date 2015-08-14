(function () {
   function Main(){
      this.player = null;
      this.canvas = null;
      this.context = null;
   }

   Main.prototype.update = function () {
      var self = this;
      this.context.clearRect(0, 0, 800, 600);
      this.context.fillStyle = 'black';
      this.context.fillRect(0, 0, 800, 600);
      if (this.player) {
         this.player.update();
         this.player.render(this.context);
      }
      requestAnimationFrame(function(){
         self.update();
      });
   };

   Main.prototype.init = function () {
      this.player = new Player();

      //Init Canvas and Context properties of main object of game
      this.canvas = document.querySelector('#game-canvas');
      this.context = this.canvas.getContext('2d');

      //Draw the Background
      this.context.fillRect(0, 0, 800, 600);
      this.update();
   };

   window.main = new Main();
   main.init();

})();
