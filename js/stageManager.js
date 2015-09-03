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
   if (this.main.currentStage)
       this.main.currentStage.off();
   this.main.currentStage = this.stages[name];
   this.main.currentStage.init();
}
