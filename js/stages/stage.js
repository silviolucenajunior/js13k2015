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
            type: type,
            originalType: type
         };
         if (type === "sentinel") {
            _object.speed = objects[type][i][4];
            _object.direction = 1;
         }
         this.objects.push(_object);
         if (type === "exitDoor") {
            this.exitDoor = _object;
         }
      }
   }
};

Stage.prototype.invertTransform = function () {
   for (var i = 0, count = this.objects.length; i < count; i++){
      if (this.objects[i].originalType === "transform") {
         if (window.reversed === 1) {
            this.objects[i].type = "death";
         } else {
           this.objects[i].type = "transform";
         }
      }
   }
};

Stage.prototype.init = function init() {
};

Stage.prototype.render = function (context) {

   for (var i = 0, count = this.objects.length; i < count; i++){
      if (this.objects[i].type === "sentinel") {
         if (window.reversed === 1) {
            break;
         } else {
           if (this.objects[i].x <= this.objects[i].marginLeft) {
              this.objects[i].direction = 1;
           } else if (this.objects[i].x >= this.objects[i].marginRight) {
              this.objects[i].direction = -1;
           }
           this.objects[i].x += this.objects[i].direction * this.objects[i].speed;
           this.drawSentinel(this.objects[i]);
         }
      } else {
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
   }
};
