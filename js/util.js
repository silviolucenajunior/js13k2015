function checkCollision (objectA, objectB) {
    var distanceX = (objectA.x + (objectA.width * 0.5) ) - (objectB.x + (objectB.width * 0.5));
    var distanceY = (objectA.y + (objectA.height * 0.5) ) - (objectB.y + (objectB.height * 0.5));
    var halfWidths = (objectA.width * 0.5) + (objectB.width * 0.5);
    var halfHeights = (objectA.height * 0.5) + (objectB.height * 0.5);
    var colDir = null;

    if (Math.abs(distanceX) < halfWidths && Math.abs(distanceY) < halfHeights) {
    	var entranceX = halfWidths - Math.abs(distanceX);
        var entranceY = halfHeights - Math.abs(distanceY);

        if (entranceX >= entranceY) {
            if (distanceY > 0) {
            	if (window.reversed === 1){
                   colDir = "t";
                   objectA.y = objectB.y + objectB.height;
                } else {
                	colDir = "b";
                    objectA.y = objectB.y + objectB.height;
                }
            } else {
            	if (window.reversed === 1){
                   colDir = "b";
                   objectA.y = objectB.y - objectA.height;
                } else {
                   colDir = "t";
                   objectA.y = objectB.y - objectA.height;
                }
            }
        } else {
            if (distanceX > 0) {
                colDir = "l";
                objectA.x = objectB.x + objectB.width;
            } else {
                colDir = "r";
                objectA.x = objectB.x - objectA.width;
            }
        }
    }
    return colDir;
}
