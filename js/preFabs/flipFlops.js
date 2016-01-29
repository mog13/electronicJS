function DTypeFlipFlop(name)
{
    this.clk = new DigIO(0,0.5,'clk');
    this.D = new DigIO(0,0.5,'D');
    this.Q = new DigIO(0,0.5,'Q');
    this.NQ = new DigIO(1,0.5,'!Q');
    this.Nands = [new NAND('nand1',2,1),new NAND('nand2',2,1),new NAND('nand3',2,1),new NAND('nand4',2,1)];
    this.inv = new NOT('not1',1,1);

    //Link the nands
    Connect(this.Nands[0].OPin(0),this.Nands[1].IPin(0));
    Connect(this.Nands[1].OPin(0),this.Nands[2].IPin(0));
    Connect(this.Nands[2].OPin(0),this.Nands[1].IPin(1));
    Connect(this.Nands[3].OPin(0),this.Nands[2].IPin(1));

    //connect the clock
    Connect(this.clk,this.Nands[0].IPin(1));
    Connect(this.clk,this.Nands[3].IPin(0));

    //connect the inverter and D input
    Connect(this.D,this.Nands[0].IPin(0));
    Connect(this.D,this.inv.IPin(0));
    Connect(this.inv.OPin(0),this.Nands[3].IPin(1));

    ///connect the outputs
    Connect(this.Nands[1].OPin(0),this.Q);
    Connect(this.Nands[2].OPin(0),this.NQ);



}
