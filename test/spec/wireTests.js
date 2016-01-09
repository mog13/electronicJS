(function () {
  'use strict';

  describe('test suite for wire functionality', function () {
		var wire;
		beforeEach(function(){
		wire = new Wire(0,'test',null);
		});
		
		it('should default to 0 if not explitly set',function() {
		wire = new Wire();
		expect(wire.value).toBe(0);
		});
		
		//plain wires should not ever change the set value
		it('should be able to set the wires value', function () {
		wire.set(5);
		expect(wire.value).toBe(5);
		});
		
		it('should correctly add collections and clea them',function(){
		var dummy = function(){};
		wire.addConnection(dummy);
		wire.addConnection(dummy);
		expect(wire.connections.length).toBe(2);
		wire.clearConnections();
		expect(wire.connections.length).toBe(0);
		});
		
		it('should call connection functions when updating', function()
		{
			var n = 0;
			var dummy = function(){ n+=1;};
			wire.addConnection(dummy);
			wire.update();
			expect(n).toBe(1);
			wire.addConnections([dummy,dummy]);
			wire.update();
			expect(n).toBe(4);
		});
		
		it('should evoke an update if a set causes a change in value',function(){
			var n = 0;
			var dummy = function(){ n+=1;};
			wire.addConnection(dummy);
			//no change as the set has not effected value
			wire.set(0);
			expect(n).toBe(0);
			//should change as set has effected value
			wire.set(1);
			expect(n).toBe(1);
		});
  });
  
    describe('test suite for digitial IO functionality', function () {
		var io;
		beforeEach(function(){
		io = new DigIO(0,3.3,'test',null)
		});
		
		it('should only return 0 or 1 when using set',function(){
			
		});
		
	});
	
})();
