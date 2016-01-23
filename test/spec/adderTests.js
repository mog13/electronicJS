/**
 * Created by morganowen on 23/01/16.
 */
(function () {
    'use strict';
    describe('test suite for adder tests', function () {

        describe('Logic table for adder', function () {

            var halfAdder;
            beforeEach(function () {
                halfAdder = new HalfAdder('testAdder');
            });

            it('should have no outputs on two 0s', function () {
                halfAdder.a.set(0);
                halfAdder.b.set(0);
                expect(halfAdder.sum.value).toBe(0);
                expect(halfAdder.carry.value).toBe(0);
            });

            it('if only one output is 1 then sum should be 1', function () {
                halfAdder.a.set(1);
                halfAdder.b.set(0);
                expect(halfAdder.sum.value).toBe(1);
                expect(halfAdder.carry.value).toBe(0);
            });

            it('if only one output (alternate) is 1 then sum should be 1', function () {
                halfAdder.a.set(0);
                halfAdder.b.set(1);
                expect(halfAdder.sum.value).toBe(1);
                expect(halfAdder.carry.value).toBe(0);
            });

            it('if both inputs are 1 then sum should be 0 but carry should be 1', function () {
                halfAdder.a.set(1);
                halfAdder.b.set(1);
                expect(halfAdder.sum.value).toBe(0);
                expect(halfAdder.carry.value).toBe(1);
            });

        });
    });

})();