function StageDemo () {
	this.platforms = [];
	this.switchs = [];
	this.enemys = [];
	this.exitDoor = null;
	this.init();
}

StageDemo.prototype.init = function init() {
	this.platforms.push({
		position: {
			x: 0,
			y: 300
		},
		dimensions: {
			width: 100,
			height: 12
		}
	});
	this.platforms.push({
		position: {
			x: 300,
			y: 290
		},
		dimensions: {
			width: 100,
			height: 12
		}
	});

    this.platforms.push({
		position: {
			x: 0,
			y: 50
		},
		dimensions: {
			width: 100,
			height: 12
		}
	});
	this.platforms.push({
		position: {
			x: 300,
			y: 50
		},
		dimensions: {
			width: 100,
			height: 12
		}
	});

	this.platforms.push({
		position: {
			x: 0,
			y: 350
		},
		dimensions: {
			width: 800,
			height: 10
		}
	});

    this.platforms.push({
		position: {
			x: 0,
			y: 10
		},
		dimensions: {
			width: 800,
			height: 10
		}
	});

	this.platforms.push({
		position: {
			x: 400,
			y: 340
		},
		dimensions: {
			width: 200,
			height: 10
		}
	});
};

StageDemo.prototype.render = function (context) {
	context.fillStyle = 'white';
	for (var i = 0, count = this.platforms.length; i < count; i++) {
       context.fillRect(this.platforms[i].position.x, this.platforms[i].position.y, this.platforms[i].dimensions.width, this.platforms[i].dimensions.height);
	}
}