import { XY2D } from './XY2D';

export function Polar2D(r, theta) {
    this.theta = theta || 0;
    this.r = r || 0;
}

Polar2D.prototype = {
    toXY: function () {
        //return [this.r*Math.cos(this.theta), this.r*Math.sin(this.theta)];
        var xy = new XY2D(this.r * Math.cos(this.theta), this.r * Math.sin(this.theta));
        return xy;
    }
};