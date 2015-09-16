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

      this.stage1 = {
         //x, y, width, height
         platform: [
            [0, 300, 200, 300],
            [500, 300, 300, 300],
            //[390, 10, 10, 50],
            [0, 0, 800, 10],
            [0, 0, 10, 600],
            [790, 0, 10, 600]
         ],
         transform: [
            [200, 590, 300, 10, "death"]
         ],
        /* death: [
            [200, 590, 300, 10]
         ],*/
         exitDoor: [[760, 240, 40, 60]]
      };

      this.stage2 = {
         //x, y, width, height
         platform: [
            [0, 400, 120, 200],
            [0, 170, 30, 530],
            [750, 400, 50, 300],
            [390, 10, 10, 50],
           // [0, 0, 800, 10],
            [0, 0, 10, 600],
            [790, 0, 10, 600]
         ],
         transform: [
            [120, 330, 50, 10],
            [400, 300, 50, 10],
            [630, 200, 160, 10],
            [0, 0, 120, 10],
            [120, 0, 30, 10, "death"],
            [150, 0, 100, 10],
            [250, 0, 400, 10, "death"],
            [650, 0, 140, 10, "death"],
            [120, 590, 630, 10, "death"]
         ],

         exitDoor: [[760, 360, 30, 40]]
      };

      this.stage3 = {
         //x, y, width, height
         platform: [
            [0, 0, 800, 10],
            [0, 590, 800, 10],
            [0, 100, 300, 50],
            [90, 200, 300, 50],
            [0, 300, 300, 50],
            [90, 400, 300, 50],
            [750, 400, 50, 300],
            [390, 10, 10, 500],
            [600, 50, 10, 550],
           // [0, 0, 800, 10],
            [0, 0, 10, 600],
            [790, 0, 10, 600],

            [170, 190, 30, 10],
            [400, 500, 100, 10],
            [400, 400, 100, 10],
            [400, 300, 100, 10],
            [400, 200, 100, 10],
            [400, 100, 100, 10],
            [500, 550, 100, 10],
            [500, 450, 100, 10],
            [500, 350, 100, 10],
            [500, 250, 100, 10],
            [500, 150, 100, 10],
            [500, 50, 100, 10],

         ],
         transform: [
            [50, 200, 40, 10, "death"],
            [350, 350, 30, 10, "death"],
            /*[400, 190, 20, 10],
            [400, 150, 20, 10],
            [400, 230, 20, 10],
            [430, 180, 20, 10],
            [430, 90, 20, 10],
            [430, 300, 20, 10],
            [430, 450, 20, 10],
            [120, 330, 50, 10],
            
            [400, 300, 50, 10],
            [630, 200, 160, 10],
            [0, 0, 120, 10],
            [120, 0, 30, 10, "death"],
            [150, 0, 100, 10],
            [250, 0, 400, 10, "death"],
            [650, 0, 140, 10, "death"],
            [120, 590, 630, 10, "death"]*/
         ],
         death: [
            [170, 190, 30, 10],
         ],
         sentinel: [
            [30, 70, 20, 30, 2, 20, 280],
            [100, 170, 20, 30, 3, 110, 360],

            [500, 20, 20, 30, 3.5, 500, 570],
            [500, 120, 20, 30, 1.3, 500, 570],
            [500, 220, 20, 30, 1.5, 500, 570],
            [500, 320, 20, 30, 2, 500, 570],
            [500, 420, 20, 30, 1.7, 500, 570],
            [500, 520, 20, 30, 2, 500, 570],

            [400, 70, 20, 30, 2, 400, 470],
            [400, 170, 20, 30, 1.7, 400, 470],
            [400, 270, 20, 30, 2, 400, 470],
            [400, 370, 20, 30, 1.5, 400, 470],
            [400, 470, 20, 30, 1.3, 400, 470],
         ],

         exitDoor: [[760, 360, 30, 40]]
      };
   };

   Main.prototype._upStages = function () {
      var _stage1 = new Stage(this);
      _stage1.populate(this.stage1);
      this.stageManager.addStage("Stage1", _stage1);
      var _stage2 = new Stage(this);
      _stage2.populate(this.stage2);
      this.stageManager.addStage("Stage2", _stage2);
      var _stage3 = new Stage(this);
      _stage3.populate(this.stage3);
      this.stageManager.addStage("Stage3", _stage3);
   };

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

      if (this.currentStage instanceof Title || this.currentStage instanceof Instructions || this.currentStage instanceof GameOver || this.currentStage instanceof EndGame) {
         requestAnimationFrame(function(){
            self.update();
         });
         return;
      }

      this.player.grounded = false;
      this.player.collision.horizontal = null;

      for (var i = 0, count = this.currentStage.objects.length; i < count; i++) {
         var dir = checkCollision(this.player, this.currentStage.objects[i]);
         if (this.currentStage.objects[i].type === "platform" || this.currentStage.objects[i].type === "transform") {
            if (dir === "l" || dir === "r") {
               this.player.speed.horizontal = 0;
               this.player.collision.horizontal = dir;
            } else if (dir === "b") {
               this.player.grounded = true;
               this.player.jumping = false;
            } else if (dir === "t") {
               this.player.speed.vertical *= -1;
            }   
         } else if (this.currentStage.objects[i].type === "death" || this.currentStage.objects[i].type === "sentinel") {
            if (dir !== null) {
               this.player.lifes -= 1;
               this.player.reset();
               if (this.player.lifes === 0){
                  this.stageManager.goTo("GameOver");
                  console.log("TESTE");
                  //this.game_over = true;
                  return;
               }
            }
         } else if (this.currentStage.objects[i].type === "exitDoor") {
            if (dir !== null) {
               this.player.reset();
               this.stageManager.nextStage();
            } 
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
      this.stageManager.addStage("Title", new Title(this.stageManager));
      this.stageManager.addStage("Instructions", new Instructions(this.stageManager));
      this.stageManager.addStage("EndGame", new EndGame(this.stageManager));
      this.stageManager.addStage("GameOver", new GameOver(this.stageManager));
      this._upStages();
      this.stageManager.goTo("Title");

      console.log("MAIN");
      console.log(this);
   //   this.player = new Player(this); //DEBUG
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
