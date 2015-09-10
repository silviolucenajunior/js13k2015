function Stage () {
   this.objects = [];
   this.exitDoor = null;
   this.init();
}

Stage.prototype.populate = function (objects) {
   var _object = null;
   for (var type in objects) {
      for (var i = 0, count = objects[type].length; i < count; i++){
         _object = {
            x: objects[type][i][0],
            y: objects[type][i][1],
            width: objects[type][i][2],
            height: objects[type][i][3],
            type: type
         };
         this.objects.push(_object);
         if (type === "exitDoor") {
            this.exitDoor = _object;
         }
      }
   }
};

Stage.prototype.init = function init() {
};

Stage.prototype.render = function (context) {

   for (var i = 0, count = this.objects.length; i < count; i++){
      //Draw the 3 types of platforms
      if (this.objects[i].type === 'platform') {
         context.fillStyle = 'gray';
      } else if (this.objects[i].type === 'death') {
         context.fillStyle = 'blue';
      } else if (this.objects[i].type === 'transform') {
         context.fillStyle = 'yellow';
      } else if (this.objects[i].type === 'exitDoor') {
         context.fillStyle = 'red';
      }
      context.fillRect(this.objects[i].x, this.objects[i].y, this.objects[i].width, this.objects[i].height); 
   }
};
