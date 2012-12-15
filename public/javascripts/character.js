(function() {
  var Character = function(name) {
    var director = cc.Director.sharedDirector
    var size = director.winSize

    this.name = name;
    this.net = undefined;

    Character.superclass.constructor.call(this, {url: 'images/grossini.png' });
    var width = Math.round(Math.random() * 100);
    var height = Math.round(Math.random() * 100);
    this.position = new cc.Point((size.width / 2) + width, (size.height / 2) + height);

    return this;
  };

  Character.prototype = Object.create(cc.Sprite.prototype);

  Character.prototype.left =  function() {
    this.position = new cc.Point(this.position.x - 10, this.position.y);
    this.net.emit('move', {id: this.name, pos: this.position});
  };

  Character.prototype.right = function() {
  };

  Character.prototype.up = function() {
  };

  Character.prototype.down = function() {
  };

  window.Character = Character;
})();
