/**
 * Created by morganowen on 08/02/16.
 */
function OR(name,ins,outs){
    Wire.call(this);
    genericMultiGate.call(this,name,ins,outs);
}
OR.prototype = new Gate();

OR.prototype.update = function update(){
    var out = 0;
    for(var i =0, len = this.inputs.length; i < len; i++)
    {
        if(this.inputs[i].value == 1) out = 1;
    }
    for(var o =0, len = this.outputs.length; o < len; o++)
    {
        this.setOutput(o,out);
    }
};

function OR2(name){
    OR.call(this,2,1);
}
OR2.prototype = new OR();
