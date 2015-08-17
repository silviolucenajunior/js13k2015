(function () {
   function Player () {
      var self = this;
      this.jumping = false;
      this.grounded = false;
      this.gravity = 0.3;
      this.reversed = 1;
      this.position = {
         x: 10,
         y: 30
      };
      this.dimensions = {
         width: 8,
         height: 8
      };
      this.speed = {
         vertical: 0,
         horizontal: 0
      };
      this.collision = {
         horizontal: null
      };
      this.keys = [];

      document.body.addEventListener('keydown', function (ev) {
         if (self.keys[ev.keyCode]) {
            return;
         }
         console.log("Down");
         console.log(self);
         self.keys[ev.keyCode] = true;
      });

      document.body.addEventListener('keyup', function (ev) {
         if (!self.keys[ev.keyCode]) {
            return;
         }
         console.log("Up");
         self.keys[ev.keyCode] = false;
      });
   }
   

   Player.prototype.update = function () {
      this.speed.horizontal = 0;

      if (this.keys[38]) {
         if (!this.jumping){
            this.jumping = true;
            this.grounded = false;
            this.speed.vertical = -6 * window.reversed;
         }
      }

      if (this.keys[32]) {
         window.reversed = -1;
      } else {
         window.reversed = 1;
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

      this.position.y += this.speed.vertical;
      this.position.x += this.speed.horizontal;
   };

   Player.prototype.render = function (context) {
      //Draw the Player
      context.fillStyle = 'red';
      context.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
   };

   window.Player = Player;

   

})();
