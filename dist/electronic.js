function Gate(t,e,n){if(this.name=t,this.inputs=[],this.outputs=n||[],e)for(var i=0,o=e.length;o>i;i++)this.addInput(e[i]);this.update()}function Wire(t,e,n){this.name=e,this.connections=n||[],this.value=t||0}function DigIO(t,e,n,i){this.name=n,this.connections=i||[],this.value=t||0,this.threshold=void 0===e?.5:e}function genericMultiGate(t,e,n){for(var i=[],o=0;e>o;o++)i.push(new DigIO);for(var u=[],s=0;n>s;s++)u.push(new DigIO);Gate.call(this,t,i,u)}function AND(t,e,n){genericMultiGate.call(this,t,e,n)}function OR(t,e,n){genericMultiGate.call(this,t,e,n)}function XOR(t,e,n){genericMultiGate.call(this,t,e,n)}function NOT(t){Gate.call(this,t,[new DigIO],[new DigIO])}function AND2(t){Gate.apply(this,[t,[new DigIO,new DigIO],[new DigIO]])}function OR2(t){OR.call(this,2,1)}Gate.prototype.update=function(){},Gate.prototype.addInput=function(t){t.addConnection(this.update,this),this.inputs.push(t)},Gate.prototype.addOutput=function(t){this.outputs.push(t)},Gate.prototype.setInput=function(t,e){this._getPin(t,this.inputs).set(e)},Gate.prototype.setOutput=function(t,e){this._getPin(t,this.outputs).set(e)},Gate.prototype.getOutput=function(t){return this._getPin(t,this.outputs).value},Gate.prototype.getInput=function(t){return this._getPin(t,this.inputs).value},Gate.prototype._getPin=function(t,e){return"string"==typeof t?this._getPinFromString(t,e):this._getPinFromNumber(t,e)},Gate.prototype._getPinFromString=function(t,e){for(var n=0,i=e.length;i>n;n++)if(e[n].name==t)return e[n];throw"could not find pin named: "+t},Gate.prototype._getPinFromNumber=function(t,e){if(t<e.length)return e[t];throw"could not find pin numbered: "+t},Wire.prototype.set=function(t){var e=this.value;return this.value=t,this.value!==e&&this.update(),this.value},Wire.prototype.addConnection=function(t,e){e=e||null,this.connections.push({callback:t,scope:e})},Wire.prototype.addConnections=function(t){for(var e=[],n=0,i=t.length;i>n;n++)if(void 0===t[n].callback){var o={callback:t[n],scope:null};e.push(o)}else e.push(t[n]);this.connections=this.connections.concat(e)},Wire.prototype.clearConnections=function(t){this.connections=[]},Wire.prototype.update=function(){for(var t=0,e=this.connections.length;e>t;t++)this.connections[t].callback.call(this.connections[t].scope,this.value)},Wire.prototype.toString=function(){var t=this.name?"("+this.name+")":"";return"<wire"+t+":"+this.value+">"},DigIO.prototype=new Wire,DigIO.prototype.set=function(t){var e=this.value;return this.value=t>this.threshold?1:0,this.value!==e&&this.update(),this.value},genericMultiGate.prototype=new Gate,AND.prototype=new Gate,AND.prototype.update=function(){for(var t=1,e=0,n=this.inputs.length;n>e;e++)1!==this.inputs[e].value&&(t=0);for(var i=0,n=this.outputs.length;n>i;i++)this.setOutput(i,t)},OR.prototype=new Gate,OR.prototype.update=function(){for(var t=0,e=0,n=this.inputs.length;n>e;e++)1==this.inputs[e].value&&(t=1);for(var i=0,n=this.outputs.length;n>i;i++)this.setOutput(i,t)},XOR.prototype=new Gate,XOR.prototype.update=function(){for(var t=1,e=0,n=0,i=this.inputs.length;i>n;n++)1==this.inputs[n].value?e=1:t=0;for(var o=0,i=this.outputs.length;i>o;o++)this.setOutput(o,!t&&e)},NOT.prototype=new Gate,NOT.prototype.update=function(){this.setOutput(0,1-this.getInput(0))},AND2.prototype=new Gate,AND2.prototype.update=function(){this.setOutput(0,this.getInput(1)&&this.getInput(0))},OR2.prototype=new OR;