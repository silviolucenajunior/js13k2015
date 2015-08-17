function checkCollision (objectA, objectB) {
    var collisionX = (objectA.position.x + (objectA.dimensions.width * 0.5) ) - (objectB.position.x + (objectB.dimensions.width * 0.5));
    var collisionY = (objectA.position.y + (objectA.dimensions.height * 0.5) ) - (objectB.position.y + (objectB.dimensions.height * 0.5));
    var hWidths = (objectA.dimensions.width * 0.5) + (objectB.dimensions.width * 0.5);
    var hHeights = (objectA.dimensions.height * 0.5) + (objectB.dimensions.height * 0.5);
    var colDir = null;

    console.log(collisionX + "<>" + collisionY + "[][]" + hWidths + "||" + hHeights);

    if (Math.abs(collisionX) < hWidths && Math.abs(collisionY) < hHeights) {
    	console.log("Have collision");
    	var oX = hWidths - Math.abs(collisionX),
        oY = hHeights - Math.abs(collisionY);

        if (oX >= oY) {
            if (collisionY > 0) {
            	if (window.reversed === 1){
                   colDir = "t";
                //   objectA.position.y += collisionY;
                } else {
                	colDir = "b";
                //    objectA.position.y -= collisionY;
                }
            } else {
            	if (window.reversed === 1){
                   colDir = "b";
                //   objectA.position.y -= collisionY + 10;
                } else {
                   colDir = "t";
                //   objectA.position.y += collisionY + 13;
                }
            }
        } else {
            if (collisionX > 0) {
                colDir = "l";
              //  objectA.position.x += oX;
            } else {
                colDir = "r";
               // objectA.position.x -= oX;
            }
        }
    }
    return colDir;
}