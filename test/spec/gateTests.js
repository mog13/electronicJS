(function () {
  'use strict';

  describe('test suite for gate functionality', function () {
		var gate;
		beforeEach(function(){
		gate = new Gate();
		});
		
		it('should be able to use a string to set and retrieve input pins',function(){
			gate.addInput(new Wire(0,'test'));
			gate.setInput('test',1);
			expect(gate.getInput('test')).toBe(1);
		});
		
		it('should be able to use a string to set and retrieve output pins',function(){
			gate.addOutput(new Wire(0,'test'));
			gate.setOutput('test',1);
			expect(gate.getOutput('test')).toBe(1);
		});
	});
	
	
	describe('test suite for basic logic',function() {
		describe('not gates should work correctly',function(){
			var gate;
			beforeEach(function(){
				gate = new NOT('test');
			});
			
			it('should return a 0 when the input is set at 1',function(){
				gate.setInput(0,1);
				expect(gate.getOutput(0)).toBe(0);
			});
			
			it('should return a 1 when the input is set at 0',function(){
				gate.setInput(0,0);
				expect(gate.getOutput(0)).toBe(1);
			});
			
		});
		
	
		describe('it should correctly implement generic AND gates with arbitrary ins/outs',function(){
			
		it('should work for many inputs one output',function(){
			var gate = new AND('test',5,1);
			expect(gate.getOutput(0)).toBe(0);
			gate.setInput(0,1);
			gate.setInput(1,1);
			gate.setInput(2,1);
			gate.setInput(3,1);
			expect(gate.getOutput(0)).toBe(0);
			console.log(gate.inputs.length);
			gate.setInput(4,1);
			expect(gate.getOutput(0)).toBe(1);
		});
		
		it('should work for many outputs and two inputs',function(){
			var gate = new AND('test',2,3);
			expect(gate.getOutput(0)).toBe(0);
			gate.setInput(0,1);
			gate.setInput(1,1);
			expect(gate.getOutput(0)).toBe(1);
			expect(gate.getOutput(1)).toBe(1);
			expect(gate.getOutput(2)).toBe(1);
		});
		
		});
		
		describe('it should correctly implement generic OR gates with arbitrary ins/outs',function(){
			
			it('should set outputs if any input is on',function(){
				var gate = new OR('test',3,3);
				expect(gate.getOutput(2)).toBe(0);
				gate.setInput(1,1);
				expect(gate.getOutput(1)).toBe(1);
				gate.setInput(1,0);
				gate.setInput(2,1);
				expect(gate.getOutput(2)).toBe(1);
			});
			
		});
		
		describe('it should correctly implement generic XOR gates with arbitrary ins/outs',function(){
			
			it('should function as a basic 2 in 1 out XOR',function(){
				var gate = new XOR('test',2,1);
				gate.setInput(0,1);
				expect(gate.getOutput(0)).toBe(1);
				gate.setInput(1,1);
				expect(gate.getOutput(0)).toBe(0);
			});
		
		});
		
		
		describe('it should correctly implement a two input AND gate', function(){
			var gate;
			beforeEach(function(){
				gate = new AND2();
			});
			
			it('should return 0 when both inputs are 0',function(){
				gate.setInput(0,0);
				gate.setInput(1,0);
				expect(gate.getOutput(0)).toBe(0);
			});
			
			it('should return 0 when one inputs is 1',function(){
				gate.setInput(0,0);
				gate.setInput(1,1);
				expect(gate.getOutput(0)).toBe(0);
				gate.setInput(1,0);
				gate.setInput(0,1);
				expect(gate.getOutput(0)).toBe(0);
			});
			
			it('should return 1 when both inputs are 1',function(){
				gate.setInput(0,1);
				gate.setInput(1,1);
				expect(gate.getOutput(0)).toBe(1);
			});
		});
	
	});
	
	
})();