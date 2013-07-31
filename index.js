var _ = require('underscore');

var Model = function(attrs) {
  
  this.attributes = attrs;
  
  _.each(this.attributes, function(v, k) {
    this.__defineGetter__(k, function(){
      return v;
    });
    
    this.__defineSetter__(k, function(val){
      this.attributes[k] = val;
      // do your custom stuff (propagate events)
    });
  })
}

exports = module.exports = Model;