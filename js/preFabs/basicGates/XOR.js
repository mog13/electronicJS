/**
 * Created by morganowen on 08/02/16.
 */
function XOR(name,ins,outs){
    genericMultiGate.call(this,name,ins,outs);
}

XOR.prototype = new Gate();

XOR.prototype.update = function update(){
    var all = 1;
    var any = 0;
    for(var i =0, len = this.inputs.length; i < len; i++)
    {
        if(this.inputs[i].value == 1) any = 1;
        else all =0;
    }
    for(var o =0, len = this.outputs.length; o < len; o++)
    {
        this.setOutput(o,!all && any);
    }
};