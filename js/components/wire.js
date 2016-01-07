function Wire(startingValue, name, connections) {
  this.name = name;
  this.connections = connections|| [];
  this.value = startingValue || 0;
}

//set a new value. If this changes the given value then update
Wire.prototype.set = function set(newValue) {
var oldValue = this.value;
this.value = newValue;

if(this.value !== oldValue) {
this.update();
}

return this.value;
};

//add a function to list of functions to call on update
Wire.prototype.addConnection = function addConnection(connection)
{
this.connections.push(connection);
};

//add many functions to list of functions to call on update
Wire.prototype.addConnections = function addConnections(connections)
{
this.connections = this.connections.concat(connections);
}
//clear all functions in the list of functions to call on update
Wire.prototype.clearConnections = function clearConnection(connection)
{
this.connections = [];
};

//call all the held connections
Wire.prototype.update = function update()
{
	for(var i =0, len = this.connections.length; i <len; i++)
	{
		this.connections[i](this.value);
	}
};

function DigIO(startingValue, threshold, name, connections) {
  this.name = name;
  this.connections = connections|| [];
  this.value = startingValue || 0;
  this.threshold = threshold;
}
DigIO.prototype = new Wire();

DigIO.prototype.set = function set(newValue){
 
var oldValue = this.value;
this.value = newValue>this.threshold?1:0;

if(this.value !== oldValue) {
this.update();
}

return this.value;
}