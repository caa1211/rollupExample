import { Polar2D } from './Polar2D';

export function XY2D(arg0, arg1) {
    // function overloading ...
    switch (arguments.length) {
        case 0:
            this.x0 = 0;
            this.x1 = 0;
            break;
        case 2:
            this.x0 = arg0;
            this.x1 = arg1;
            break;
        case 1:  // pass an array
            this.x0 = arg0[0];
            this.x1 = arg0[1];
            break;
    }
}

XY2D.prototype = {
    toPolar: function () {
        var p = new Polar2D();
        p.r = Math.sqrt(this.x0 * this.x0 + this.x1 * this.x1);
        p.theta = Math.atan2(this.x1, this.x0);
        return p;
    },

    dist: function (p) {
        if (p instanceof XY2D)
            return Math.sqrt((p.x0 - this.x0) * (p.x0 - this.x0) + (p.x1 - this.x1) * (p.x1 - this.x1));
        else if (p instanceof Polar2D) {
            var pxy = p.toXY();
            return Math.sqrt((pxy.x0 - this.x0) * (pxy.x0 - this.x0) + (pxy.x1 - this.x1) * (pxy.x1 - this.x1));
        }
    }
};

