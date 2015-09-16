function StageManager (main) {
   this.main = main;
   this.currentStage = null;
   this.init();
}

StageManager.prototype.init = function init() {
   this.stages = [];
};

StageManager.prototype.addStage = function (name, stage) {
   this.stages[name] = stage;
};

StageManager.prototype.goTo = function (name) {
  this.currentStage = name;
   if (this.main.currentStage && this.main.currentStage.off)
       this.main.currentStage.off();
   this.main.currentStage = this.stages[name];
   console.log(name);
   console.log(this.stages[name]);
   if (this.main.currentStage.init)
      this.main.currentStage.init();
};

StageManager.prototype.reverse = function () {
   if (this.stages[this.currentStage].invertTransform) {
      this.stages[this.currentStage].invertTransform();
   }
};

StageManager.prototype.nextStage = function () {
	if (this.currentStage === "Stage1") {
		this.goTo("Stage2");
	} else if (this.currentStage === "Stage2") {
		this.goTo("Stage3");
	} else if (this.currentStage === "Stage3") {
		this.goTo("EndGame");
	}
}
