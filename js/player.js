(function () {
   function Player () {
      var self = this;
      this.position = {
         x: 10,
         y: 20
      };
      this.dimensions = {
         width: 64,
         height: 64
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
      if (this.keys[39] === true) {
         this.position.x += 5;
      }

      if (this.keys[37] === true) {
         this.position.x -= 5;
      }
   };

   Player.prototype.render = function (context) {
      //Draw the Player
      context.fillStyle = 'red';
      context.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
   };

   window.Player = Player;

   

})();
