/**
 * Creates/defines a new Wire object
 * @param startingValue
 * @param name
 * @param connections
 * @constructor
 */
function Wire(startingValue, name, connections) {
    this.name = name;
    this.connections = connections || [];
    this.value = startingValue || 0;
}

//set a new value. If this changes the given value then update
Wire.prototype.set = function set(newValue) {
    var oldValue = this.value;
    this.value = newValue;

    if (this.value !== oldValue) {
        this.update();
    }

    return this.value;
};

//add a function to list of functions to call on update
//if no scope is given then it uses null
Wire.prototype.addConnection = function addConnection(connection, _scope) {
    _scope = _scope || null;
    this.connections.push({callback: connection, scope: _scope});
};

//add many functions to list of functions to call on update
Wire.prototype.addConnections = function addConnections(_connections) {
    var newConnections = [];
    for (var i = 0, len = _connections.length; i < len; i++) {
        //if its just a function well make it into an object
        if (_connections[i].callback === undefined) {
            var temp = {callback: _connections[i], scope: null};
            newConnections.push(temp);
        }
        else {
            newConnections.push(_connections[i]);
        }
    }

    this.connections = this.connections.concat(newConnections);
};
//clear all functions in the list of functions to call on update
Wire.prototype.clearConnections = function clearConnection() {
    this.connections = [];
};

//call all the held connections
Wire.prototype.update = function update() {
    if(this.connections) {
        for (var i = 0, len = this.connections.length; i < len; i++) {
            this.connections[i].callback.call(this.connections[i].scope, this.value);
        }
    }
};

Wire.prototype.toString = function () {
    var name = this.name ? '(' + this.name + ')' : '';
    return '<wire' + name + ':' + this.value + '>';
};


function DigIO(startingValue, threshold, name, connections) {
    this.name = name;
    this.connections = connections || [];
    this.value = startingValue || 0;
    this.threshold = threshold === undefined ? 0.5 : threshold;
}
DigIO.prototype = new Wire();

DigIO.prototype.set = function set(newValue) {

    var oldValue = this.value;
    this.value = newValue > this.threshold ? 1 : 0;
    //console.log(this.name + ' was set to: ' + this.value, this);
    if (this.value !== oldValue) {
        this.update();
      //  console.log(this.name + ' triggered an update', this);
    }

    return this.value;
};