/**
 * elevator.js
 * Lifty Game
 */

var _ = require('lodash');

function Elevator(options) {

  var initialParams = _.defaults(options || {}, {
    capacity: 60,
    speed: 500,
    floors: [],
    odometer: 0,
    lastMaintenance: 0,
    currentFloor: 0
  });

  _.assign(this, initialParams);
}

Elevator.prototype = {
  requestFloor: function(floorNumber) {
    if (this.floors.indexOf(floorNumber) > -1) {
      return this.floors.length;
    } else {
      return this.floors.push(floorNumber);  
    }    
  }
}

exports.Elevator = Elevator;
