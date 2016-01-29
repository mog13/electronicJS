function genericMultiGate(name,ins,outs)
{
	var inputs = [];
		for(var i = 0; i < ins; i++)
		{
			inputs.push(new DigIO(0,0.5,name +' Ipin ' + i));
		}
	var outputs = [];
		for(var o = 0; o < outs; o++)
		{
			outputs.push(new DigIO(0,0.5,name +' Opin ' + o));
		}
	Gate.call(this,name,inputs,outputs);
}
genericMultiGate.prototype = new Gate();
//Generic and gate with n ins and outs
function AND(name,ins,outs){
	genericMultiGate.call(this,name,ins,outs);
};
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



//generic or gate with n ins and outs
function OR(name,ins,outs){
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
}

function XOR(name,ins,outs){
	genericMultiGate.call(this,name,ins,outs);
};
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
	}

function NOT(name)
{
	Gate.call(this,name,[new DigIO()],[new DigIO()]);
};
NOT.prototype = new Gate();

NOT.prototype.update = function update(){
	this.setOutput(0,1-this.getInput(0));
};


function AND2(name) {
	Gate.apply(this,[name,[new DigIO(),new DigIO()],[new DigIO()]]);
}

AND2.prototype = new Gate();

AND2.prototype.update = function update(){
	this.setOutput(0,this.getInput(1)&&this.getInput(0));
};
 
 function OR2(name){
	OR.call(this,2,1);
 };
 OR2.prototype = new OR();
 