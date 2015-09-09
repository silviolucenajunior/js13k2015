(function () {
   function Main(){
      this.player = null;
      this.currentStage = null;
      this.canvas = null;
      this.context = null;
      this.game_over = false;
      this.guiRender = null;
      this.stageManager = new StageManager(this);
      window.reversed = 1;
   }

   Main.prototype.update = function () {
      var self = this;
      if (this.game_over) {
         return;
      }
      this.context.clearRect(0, 0, 800, 600);
      this.context.fillStyle = 'black';
      this.context.fillRect(0, 0, 800, 600);

       

      if (this.currentStage) {
         this.currentStage.render(this.context);
      }

      if (this.currentStage instanceof Title || this.currentStage instanceof Instructions) {
         requestAnimationFrame(function(){
            self.update();
         });
         return;
      }

      //Check for Collision with stage door
      var dir = checkCollision(this.player, this.currentStage.exitDoor);
      if (dir !== null) {
         this.player.reset();
         this.stageManager.nextStage();
      }


      //check for collisions of stage deaths and player
      for (var i = 0, count = this.currentStage.deaths.length; i < count; i++) {
         var dir = checkCollision(this.player, this.currentStage.deaths[i]);
         if (dir !== null) {
            this.player.lifes -= 1;
            this.player.reset();
            if (this.player.lifes === 0){
               this.game_over = true;
            }
         }
      }

      //check for collisions of stage platfforms and player
      this.player.grounded = false;
      this.player.collision.horizontal = null;
      for (var i = 0, count = this.currentStage.platforms.length; i < count; i++) {
         var dir = checkCollision(this.player, this.currentStage.platforms[i]);
 
           if (dir === "l" || dir === "r") {
               this.player.speed.horizontal = 0;
               this.player.collision.horizontal = dir;
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

      if (this.guiRender && this.player) {
         this.guiRender.renderPlayerLifes(this.context, this.player);
      }

      requestAnimationFrame(function(){
         self.update();
      });
   };

   Main.prototype.init = function () {
  //    this.player = new Player();
      console.log(this.stageManager);
      this.stageManager.addStage("Title", new Title(this.stageManager));
      this.stageManager.addStage("Instructions", new Instructions(this.stageManager));
      this.stageManager.addStage("Stage1", new Stage1(this.stageManager));
      this.stageManager.addStage("Stage2", new Stage2(this.stageManager));
      this.stageManager.addStage("Stage3", new Stage3(this.stageManager));
      this.stageManager.goTo("Title");
       this.guiRender = new GUI();

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
