/**
 * Created by morganowen on 23/01/16.
 */
var Connect = function(pin1,pin2) {
    pin1.addConnection(pin2.set,pin2);
};