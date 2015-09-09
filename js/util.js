function checkCollision (objectA, objectB) {
    var distanceX = (objectA.position.x + (objectA.dimensions.width * 0.5) ) - (objectB.position.x + (objectB.dimensions.width * 0.5));
    var distanceY = (objectA.position.y + (objectA.dimensions.height * 0.5) ) - (objectB.position.y + (objectB.dimensions.height * 0.5));
    var halfWidths = (objectA.dimensions.width * 0.5) + (objectB.dimensions.width * 0.5);
    var halfHeights = (objectA.dimensions.height * 0.5) + (objectB.dimensions.height * 0.5);
    var colDir = null;

    if (Math.abs(distanceX) < halfWidths && Math.abs(distanceY) < halfHeights) {
    	var entranceX = halfWidths - Math.abs(distanceX);
        var entranceY = halfHeights - Math.abs(distanceY);

        if (entranceX >= entranceY) {
            if (distanceY > 0) {
            	if (window.reversed === 1){
                   colDir = "t";
                   objectA.position.y = objectB.position.y + objectB.dimensions.height;
                } else {
                	colDir = "b";
                    objectA.position.y = objectB.position.y + objectB.dimensions.height;
                }
            } else {
            	if (window.reversed === 1){
                   colDir = "b";
                   objectA.position.y = objectB.position.y - objectA.dimensions.height;
                } else {
                   colDir = "t";
                   objectA.position.y = objectB.position.y - objectA.dimensions.height;
                }
            }
        } else {
            if (distanceX > 0) {
                colDir = "l";
                objectA.position.x = objectB.position.x + objectB.dimensions.width;
            } else {
                colDir = "r";
                objectA.position.x = objectB.position.x - objectA.dimensions.width;
            }
        }
    }
    return colDir;
}
