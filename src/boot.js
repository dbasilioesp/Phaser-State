var boot = function (game) {
	console.log("%cStarting my awesome game", "color:white; background:red");
}

boot.prototype = {
	preload: function (){
		this.game.load.image("loading", "assets/loading.png");
	},
	create: function () {
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.setScreenSize = true;
		this.game.state.start("Preload");
	}
}