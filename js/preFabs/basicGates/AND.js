/**
 * Created by morganowen on 08/02/16.
 */

function AND(name,ins,outs){
    genericMultiGate.call(this,name,ins,outs);
}

AND.prototype = new Gate();

AND.prototype.update = function update(){
    var out = 1;
    for(var i =0, len = this.inputs.length; i < len; i++)
    {
        if(this.inputs[i].value !== 1) out = 0;
    }
    for(var o =0, len = this.outputs.length; o < len; o++)
    {
        this.setOutput(o,out);
    }

};



function AND2(name) {
    Gate.apply(this,[name,[new DigIO(),new DigIO()],[new DigIO()]]);
}

AND2.prototype = new Gate();

AND2.prototype.update = function update(){
    this.setOutput(0,this.getInput(1)&&this.getInput(0));
};