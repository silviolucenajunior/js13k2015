function Stage (main) {
   this.main = main;
   this.objects = [];
   this.exitDoor = null;
   this._resolverKeyUp = this.bindKeyUp.bind(this);

  // document.body.addEventListener('keyup', this._resolverKeyUp);

}

Stage.prototype.off = function () {
   document.body.removeEventListener('keyup', this._resolverKeyUp ); 
};

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

         if (type === "transform") {
            if (objects[type][i][4]) {
               _object.type = objects[type][i][4];
            }
         }

         if (type === "sentinel") {
            _object.speed = objects[type][i][4];
            _object.marginLeft = objects[type][i][5];
            _object.marginRight = objects[type][i][6];
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
         console.log(this.objects[i]);
         if (this.objects[i].type === "death") {
            this.objects[i].type = "transform";
         } else {
            this.objects[i].type = "death";
         }
      }
   }
   console.log("On Invert\t");
   console.log(this);
};


Stage.prototype.bindKeyUp = function (ev) {

   var self = this;
   if (ev.keyCode == 32 && self.main.player.grounded === true && self.main.player.reverseCharges > 0) {
       console.log("Active Reverse");

      self.invertTransform();
   }
};

Stage.prototype.drawSentinel = function (object, context) {
   context.fillStyle = "green";
   console.log("Draw Sentinel");
   context.beginPath();
   context.moveTo(object.x, object.y + object.height);
   context.lineTo(object.x + (object.width * 0.5), object.y);
   context.lineTo(object.x + object.width, object.y + object.height);
   context.fill();
};

Stage.prototype.render = function (context) {

   for (var i = 0, count = this.objects.length; i < count; i++){
      if (this.objects[i].type === "sentinel") {
         if (window.reversed === -1) {
            this.drawSentinel(this.objects[i], context);
            continue;
         } else {
           if (this.objects[i].x <= this.objects[i].marginLeft) {
              this.objects[i].direction = 1;
           } else if (this.objects[i].x >= this.objects[i].marginRight) {
              this.objects[i].direction = -1;
           }
           this.objects[i].x += this.objects[i].direction * this.objects[i].speed;
           this.drawSentinel(this.objects[i], context);
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
         } else {
            console.log("NO TYPE");
            context.fillStyle = 'red';
         }
         context.fillRect(this.objects[i].x, this.objects[i].y, this.objects[i].width, this.objects[i].height); 
      }
   }
};

