var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps); 

  // this.$node.addClass("squareDancer"); 
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype); 

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer; 

makeBlinkyDancer.prototype.step = function(){

    this.oldStep = makeDancer.prototype.step;
     this.oldStep();
   
    this.$node.toggle();
};



var makeSquareDancer = function (top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass("squareDancer"); 
} 

makeSquareDancer.prototype= Object.create(makeBlinkyDancer.prototype); 

makeSquareDancer.prototype.constructor= makeSquareDancer; 



var makeBouncyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
};

makeBouncyDancer.prototype= Object.create(makeDancer.prototype);

makeBouncyDancer.prototype.constructor= makeBouncyDancer; 

makeBouncyDancer.prototype.step= function () {
   this.oldStep= makeDancer.prototype.step; 
   this.oldStep();
   this.$node.animate({top: $("body").height() * Math.random(), left: $("body").width() * Math.random()}, 500, function(){});
   this.$node.animate({top: $("body").height() * Math.random(), left: $("body").width() * Math.random()}, 500, function(){});
}

lineEmUp= function () {

  for(var i=0; i< window.dancers.length; i++) {
    window.dancers[i].lineUp(); 

  }

}



