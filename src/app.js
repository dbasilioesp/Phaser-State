var game = new Phaser.Game(
	300, 450, 
	Phaser.AUTO, 
	'phaser-example');

game.state.add('Boot', boot);
game.state.add('Preload', preload);
game.state.add('GameTitle', gameTitle);
game.state.add('TheGame', theGame);
game.state.add('GameOver', gameOver);
game.state.start('Boot');
