function checkCollision (objectA, objectB) {
    var distanceX = (objectA.position.x + (objectA.dimensions.width * 0.5) ) - (objectB.x + (objectB.width * 0.5));
    var distanceY = (objectA.position.y + (objectA.dimensions.height * 0.5) ) - (objectB.y + (objectB.height * 0.5));
    var halfWidths = (objectA.dimensions.width * 0.5) + (objectB.width * 0.5);
    var halfHeights = (objectA.dimensions.height * 0.5) + (objectB.height * 0.5);
    var colDir = null;

    if (Math.abs(distanceX) < halfWidths && Math.abs(distanceY) < halfHeights) {
    	var entranceX = halfWidths - Math.abs(distanceX);
        var entranceY = halfHeights - Math.abs(distanceY);

        if (entranceX >= entranceY) {
            if (distanceY > 0) {
            	if (window.reversed === 1){
                   colDir = "t";
                   objectA.position.y = objectB.y + objectB.height;
                } else {
                	colDir = "b";
                    objectA.position.y = objectB.y + objectB.height;
                }
            } else {
            	if (window.reversed === 1){
                   colDir = "b";
                   objectA.position.y = objectB.y - objectA.dimensions.height;
                } else {
                   colDir = "t";
                   objectA.position.y = objectB.y - objectA.dimensions.height;
                }
            }
        } else {
            if (distanceX > 0) {
                colDir = "l";
                objectA.position.x = objectB.x + objectB.width;
            } else {
                colDir = "r";
                objectA.position.x = objectB.x - objectA.dimensions.width;
            }
        }
    }
    return colDir;
}
