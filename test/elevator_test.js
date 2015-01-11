var should = require('chai').should()
  , Elevator = require('../models/elevator').Elevator;

describe('Elevator', function() {

  describe('#constructor', function() {
    it('should return an instance of an Elevator', function() {
      var ellie = new Elevator();
      ellie.should.be.an.instanceof(Elevator);
    });

    it('should initialize the defaults', function() {
      var ellie = new Elevator();
      ellie.should.have.property('capacity', 60);
      ellie.should.have.property('speed', 500);
      ellie.should.have.property('floors');
      ellie.floors.should.be.empty;
      ellie.should.have.property('odometer', 0);
      ellie.should.have.property('lastMaintenance', 0);
      ellie.should.have.property('currentFloor', 0);
    });

    it('should override the defaults', function() {
      var ellie = new Elevator({
        capacity: 50,
        speed: 600,
        floors: [1,5,2],
        odometer: 500,
        lastMaintenance: 250,
        currentFloor: 5
      });
      ellie.capacity.should.equal(50);
      ellie.speed.should.equal(600);
      ellie.floors.should.eql([1,5,2]);
      ellie.odometer.should.equal(500);
      ellie.lastMaintenance.should.equal(250);
      ellie.currentFloor.should.equal(5)
    });

  });

  describe('#requestFloor', function() {
    it('should add the given floor to the floor list', function() {
      var ellie = new Elevator();
      ellie.floors.should.be.empty;
      ellie.requestFloor(4).should.equal(1);
      ellie.floors.should.eql([4]);
      ellie.requestFloor(2).should.equal(2);
      ellie.floors.should.eql([4, 2]);
    });

    it('should not add duplicates', function() {
      var ellie = new Elevator();
      ellie.floors.should.be.empty;
      ellie.requestFloor(4).should.equal(1);
      ellie.floors.should.eql([4]);
      ellie.requestFloor(4).should.equal(1);
      ellie.floors.should.eql([4]);
    });
  });

});
