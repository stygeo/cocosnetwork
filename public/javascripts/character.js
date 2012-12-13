(function() {
  var Character = function(name) {
    var director = cc.Director.sharedDirector
    var size = director.winSize

    this.name = name;

    Character.superclass.constructor.call(this, {url: 'images/grossini.png' });
    this.position = new cc.Point(size.width / 2, size.height / 2)

    return this;
  };

  Character.prototype = Object.create(cc.Sprite.prototype);

  Character.prototype.left =  function() {
  };
  Character.prototype.right = function() {
  };
  Character.prototype.up = function() {
  };
  Character.prototype.down = function() {
  };

  window.Character = Character;
})();
