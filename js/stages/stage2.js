function Stage2 () {
   this.platforms = [];
   this.deaths = [];
   this.switchs = [];
   this.enemys = [];
   this.exitDoor = null;
   this.init();
}

Stage2.prototype.init = function init() {
   this.exitDoor = {
      position: {
         x: 760,
         y: 240
      },
      dimensions: {
         width: 40,
         height: 60
      }
   };

   this.platforms.push({
      position: {
         x: 0,
         y: 200
      },
      dimensions: {
         width: 100,
         height: 200
      }
   });
   this.platforms.push({
      position: {
         x: 300,
         y: 300
      },
      dimensions: {
         width: 250,
         height: 300
      }
   });
   this.deaths.push({
      position: {
         x: 200,
         y: 590
      },
      dimensions: {
         width: 300,
         height: 10
      }
   });
   this.platforms.push({
      position: {
         x: 390,
         y: 10
      },
      dimensions: {
         width: 10,
         height: 50
      }
   });
   this.platforms.push({
      position: {
         x: 0,
         y: 0
      },
      dimensions: {
         width: 800,
         height: 10
      }
   });
   this.platforms.push({
      position: {
         x: 0,
         y: 0
      },
      dimensions: {
         width: 10,
         height: 600
      }
   });
   this.platforms.push({
      position: {
         x: 790,
         y: 0
      },
      dimensions: {
         width: 10,
         height: 600
      }
   });
   
};

Stage2.prototype.render = function (context) {
   context.fillStyle = 'gray';
   for (var i = 0, count = this.platforms.length; i < count; i++) {
       context.fillRect(this.platforms[i].position.x, this.platforms[i].position.y, this.platforms[i].dimensions.width, this.platforms[i].dimensions.height);
   }
   context.fillStyle = 'blue';
   for (var i = 0, count = this.deaths.length; i < count; i++) {
       context.fillRect(this.deaths[i].position.x, this.deaths[i].position.y, this.deaths[i].dimensions.width, this.deaths[i].dimensions.height);
   }

   context.fillStyle = 'red';
   context.fillRect(this.exitDoor.position.x, this.exitDoor.position.y, this.exitDoor.dimensions.width, this.exitDoor.dimensions.height);

}
