// Creates and returns a new dancer object that can step


var makeDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  debugger;
    this.step(); 

  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps
};



makeDancer.prototype.step = function(){
    console.log(this);
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

makeDancer.prototype.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };


makeDancer.prototype.lineUp = function(){
  this.$node.css({top: 0, left: $("body").width() * Math.random()});
  return 'hey line up actually works'; 
};
