/**
 * Created by morganowen on 08/02/16.
 */
function NAND(name,ins,outs){
    genericMultiGate.call(this,name,ins,outs);
};
NAND.prototype = new Gate();

NAND.prototype.update = function update(){
    var out = 1;
    for(var i =0, len = this.inputs.length; i < len; i++)
    {
        if(this.inputs[i].value !== 1) out = 0;
    }
    for(var o =0, len = this.outputs.length; o < len; o++)
    {
        this.setOutput(o,1-out);
    }

};
