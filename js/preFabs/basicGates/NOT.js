/**
 * Created by morganowen on 08/02/16.
 */
function NOT(name)
{
    Gate.call(this,name,[new DigIO()],[new DigIO()]);
}
NOT.prototype = new Gate();

NOT.prototype.update = function update(){
    this.setOutput(0,1-this.getInput(0));
};