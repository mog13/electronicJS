function genericMultiGate(name, ins, outs) {
    var inputs = [];
    for (var i = 0; i < ins; i++) {
        inputs.push(new DigIO(0, 0.5, name + ' Ipin ' + i));
    }
    var outputs = [];
    for (var o = 0; o < outs; o++) {
        outputs.push(new DigIO(0, 0.5, name + ' Opin ' + o));
    }
    Gate.call(this, name, inputs, outputs);
}

genericMultiGate.prototype = new Gate();




