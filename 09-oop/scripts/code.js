class Calculations {
    constructor (a, b) {
        this._a = a;
        this._b = b;
    }
    addA(val) {
        this._a = this._a + val;
    }
    getA() {
        return this._a;
    }
    get A() {
        return this._a;
    }
    set A(value) {
        this._a = value;
    }
    getB = () => {
        return this._b;
    }
    Add = () => (this._a + this._b);
}

class ExtendedCalculations extends Calculations {
    constructor (a, b) {
        super(a, b);
    }
    Subtract = () => (this._a - this._b);
}