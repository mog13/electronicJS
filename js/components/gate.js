function Gate(name, inputs, outputs) {
  this.name = name;
  this.inputs = [];
  this.outputs = outputs || [];
  
  //add the inputs separately to make sure they're all connected to gate
  if(inputs){
	  for(var i =0, len =inputs.length; i <len; i++)
	  {
		this.addInput(inputs[i]);
	  }
	}
	this.update();
}

Gate.prototype.update = function update() {

};

Gate.prototype.addInput = function addInput(input)
{
	input.addConnection(this.update,this);
	this.inputs.push(input);
};

Gate.prototype.addOutput = function addOutput(output)
{
	this.outputs.push(output);
};



Gate.prototype.setInput =  function setInput(pin,value)
{
	this._getPin(pin,this.inputs).set(value);
}

Gate.prototype.setOutput =  function setOutput(pin,value)
{
	this._getPin(pin,this.outputs).set(value);
};

Gate.prototype.getOutput = function getOutput(pin)
{
	return this._getPin(pin,this.outputs).value;
};

Gate.prototype.getInput = function getInput(pin)
{
	return this._getPin(pin,this.inputs).value;
};

Gate.prototype.getOutputPin = function getOutputPin(pin)
{
	return this._getPin(pin,this.outputs);
};

Gate.prototype.getInputPin = function getInputPin(pin)
{
	return this._getPin(pin,this.inputs);
};

Gate.prototype.OPin = Gate.prototype.getOutputPin;
Gate.prototype.IPin = Gate.prototype.getInputPin;

//get a pin from the given wires given either the name or number
Gate.prototype._getPin = function _getPin(pin,wires)
{
	if( typeof pin == 'string') return this._getPinFromString(pin,wires)
	return this._getPinFromNumber(pin,wires);
};
//get a pin from the given wires with the given name
Gate.prototype._getPinFromString = function _getPinFromString(name,wires)
{
		for(var i = 0, len = wires.length; i <len; i++)
		{
			if( wires[i].name == name){
				return wires[i];
			}
		}
		throw 'could not find pin named: ' + name; 
};
//Get a pin at the given number from the given wires
Gate.prototype._getPinFromNumber = function _getPinFromNumber(number,wires)
{
		if(number < wires.length) return wires[number]
		throw 'could not find pin numbered: ' + number; 
};