(function () {
   function Main(){
      this.player = null;
      this.currentStage = null;
      this.canvas = null;
      this.context = null;
      window.reversed = 1;
   }

   Main.prototype.update = function () {
      var self = this;
      this.context.clearRect(0, 0, 800, 600);
      this.context.fillStyle = 'black';
      this.context.fillRect(0, 0, 800, 600);

      if (this.currentStage) {
         this.currentStage.render(this.context);
      }

      //check for collisions of stage platfforms and player
      this.player.grounded = false;
      this.player.collision.horizontal = null;
      for (var i = 0, count = this.currentStage.platforms.length; i < count; i++) {
         var dir = checkCollision(this.player, this.currentStage.platforms[i]);
 
           if (dir === "l" || dir === "r") {
               this.player.speed.horizontal = 0;
               this.player.collision.horizontal = dir;
               this.player.jumping = false;
           } else if (dir === "b") {
               this.player.grounded = true;
               this.player.jumping = false;
           } else if (dir === "t") {
               this.player.speed.vertical *= -1;
           }

      }

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
      this.currentStage = new StageDemo();

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
