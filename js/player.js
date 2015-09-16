(function () {
   function Player (main) {
      var self = this;
      console.log("Under Plaher");
      console.log(main);
      this.main = main;
      this.jumping = false;
      this.grounded = false;
      this.gravity = 0.3;
      this.reversed = 1;
      this.x = 10;
      this.y = 40;
      this.width = 8;
      this.height = 8;
      this.speed = {
         vertical: 0,
         horizontal: 0
      };
      this.collision = {
         horizontal: null
      };
      this.keys = [];
      this.lifes = 3;
      this.reverseCharges = 4;

      document.body.addEventListener('keydown', function (ev) {
         if (self.keys[ev.keyCode]) {
            return;
         }
         self.keys[ev.keyCode] = true;
      });

      document.body.addEventListener('keyup', function (ev) {
         if (!self.keys[ev.keyCode]) {
            return;
         }
         self.keys[ev.keyCode] = false;

         if (ev.keyCode == 32 && self.grounded === true && self.reverseCharges > 0) {
            self.reverseCharges -= 1;
            window.reversed = window.reversed * -1;
            console.log("POrrA");
            self.main.stageManager.reverse();
            self.jumping = true;
            self.grounded = false;
         }
      });
   }

   Player.prototype.reset = function () {
      this.jumping = false;
      this.grounded = false;
      this.gravity = 0.3;
      this.reverseCharges = 4;
      this.reversed = 1;
      this.x = 10;
      this.y = 30;
      this.width = 8;
      this.height = 8;
      this.speed = {
         vertical: 0,
         horizontal: 0
      };
      this.collision = {
         horizontal: null
      };
   };
   

   Player.prototype.update = function () {
      this.speed.horizontal = 0;

      if (this.keys[38] === true && window.reversed === 1) {
         if (!this.jumping){
            this.jumping = true;
            this.grounded = false;
            this.speed.vertical = -6 * window.reversed;
         }
      }

      if (this.keys[40] === true && window.reversed === -1) {
         if (!this.jumping){
            this.jumping = true;
            this.grounded = false;
            this.speed.vertical = -6 * window.reversed;
         }
      }

      if (this.keys[39] === true) {
         if (this.collision.horizontal !== "r") {
            this.speed.horizontal = 5 * window.reversed;
         }
      }

      if (this.keys[37] === true) {
         if (this.collision.horizontal !== "l") {
            this.speed.horizontal = -5 * window.reversed;
         }
      }

      this.speed.vertical += (this.gravity * window.reversed); // Gravity;

      if (this.grounded) {
         this.speed.vertical = 0;
      }

      this.y += this.speed.vertical;
      this.x += this.speed.horizontal;
   };

   Player.prototype.render = function (context) {
      //Draw the Player
      context.fillStyle = 'red';
      context.fillRect(this.x, this.y, this.width, this.height);
   };

   window.Player = Player;
})();
