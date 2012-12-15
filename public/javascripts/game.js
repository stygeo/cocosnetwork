(function() {
  var Game = {};
  Game.init = function(cb) {
    var socket = io.connect('http://94.242.229.4:8080/')

    var director = cc.Director.sharedDirector
    director.attachInView(document.getElementById('cocos2d-demo'))
    director.displayFPS = true

    var size = director.winSize

    var scene = new cc.Scene
    var layer = new cc.Layer
    scene.addChild(layer)

    director.runWithScene(scene)

    this.scene = scene;
    this.layer = layer;
    this.net = socket;

    cb.call(this, this);
  };

  Game.removeChild = function(child) {
    this.layer.removeChild(child);
  };

  Game.addChild = function(character) {
    character.net = this.net;
    this.layer.addChild(character);
  };

  Game.initChar = function(character) {
    Game.addChild(character);

    var c = {id: character.name, pos: character.position};
    this.net.emit("init", c);
  };

  window.Game = Game;
})();
