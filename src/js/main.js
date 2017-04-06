import { Polar2D } from './modules/Polar2D';
import { XY2D } from './modules/XY2D';

var p = new Polar2D(1, Math.PI);
var x = new XY2D(0, -2);

console.log(p);
console.log(p.toXY());
console.log(x);
console.log(x.toPolar());