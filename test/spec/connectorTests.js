/**
 * Created by morganowen on 23/01/16.
 */
(function () {
    'use strict';

    describe('test suite for connector functionality', function () {
        it('should be able to link gates together',function(){
            var gate1 = new AND('',2,1);
            var gate2 = new AND('',2,1);
            var gate3 = new OR('',2,1);
            expect(gate3.getOutput(0)).toBe(0);
            Connect(gate1.OPin(0),gate3.IPin(0));
            Connect(gate2.OPin(0),gate3.IPin(1));

            gate1.setInput(0,1);
            gate1.setInput(1,1);
            expect(gate3.getOutput(0)).toBe(1);
            gate1.setInput(1,0);
            expect(gate3.getOutput(0)).toBe(0);
            gate2.setInput(1,1);
            expect(gate3.getOutput(0)).toBe(0);
            gate2.setInput(0,1);
            expect(gate3.getOutput(0)).toBe(1);
        });

    });

})();