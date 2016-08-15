var timeMachine = function (owner, color, sizeInside, sizeOutside) {
  this.owner = owner;
  this.color = color;
  this.sizeInside = sizeInside;
  this.sizeOutside = sizeOutside;
  this.addPassenger = function(name){
    return this.passengers.push(name)
  };
  this.isRealTardis = function(){
    if(this.sizeInside < this.sizeOutside || this.color !== 'blue'){
      return false;
    } else if(this.sizeOutside < this.sizeInside){
      return true;
    }
  };
  this.passengerCount = function(){
    if(this.passengers.length === 0){
      return 0
    } else {
      return this.passengers.length
    }
  };
  this.passengers = [];
  this.listPassengers = function(){
    return this.passengers
  };
  this.nameLengths = function () {
    var count = 0;
    for (var i = 0; i < this.passengers.length; i++) {
      count += this.passengers[i].length;
    }
    return count;
  }


}

module.exports = timeMachine;
