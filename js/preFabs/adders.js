/**
 * Created by morganowen on 23/01/16.
 */
function HalfAdder(name)
{
    this.a = new DigIO(0,0.5,'a');
    this.b = new DigIO(0,0.5,'b');
    this.sum = new DigIO(0,0.5,'sum');
    this.carry = new DigIO(0,0.5,'carry');
    this.xor = new XOR('xor1',2,1);
    this.and = new AND('and1',2,1);

    Connect(this.a,this.xor.IPin(0));
    Connect(this.b,this.xor.IPin(1));

    Connect(this.a,this.and.IPin(0));
    Connect(this.b,this.and.IPin(1));

    Connect(this.xor.OPin(0),this.sum);
    Connect(this.and.OPin(0),this.carry);
}
