function StageManager (main) {
   this.main = main;
   this.init();
}

StageManager.prototype.init = function init() {
   this.stages = [];
};

StageManager.prototype.addStage = function (name, stage) {
   this.stages[name] = stage;
};

StageManager.prototype.goTo = function (name) {
   if (this.main.currentStage && this.main.currentStage.off)
       this.main.currentStage.off();
   this.main.currentStage = this.stages[name];
   if (this.main.currentStage.init)
      this.main.currentStage.init();
}

StageManager.prototype.nextStage = function () {
	console.log("Ntext");
	console.log(this.main.currentStage.constructor);
	if (this.main.currentStage instanceof Stage1) {
		console.log("blow");
		this.goTo("Stage2");
	} else if (this.main.currentStage instanceof Stage2) {
		this.goTo("Stage3");
	} else if (this.main.currentStage instanceof Stage3) {
		this.goTo("EndGame");
	}
}
