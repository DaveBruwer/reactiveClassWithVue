export default class MyClass {
    constructor() {
        this._parameter1 = 1
        this.parameter2 = "two"
    }
    get parameter1() {
        return this._parameter1
    }
    set parameter1(_value) {
        if(isNaN(_value)) {
            throw new TypeError("Can only accept numbers");
        } else {
            this._parameter1 = _value
        }
    }
    get doubleParam1() {
        return this.parameter1 * 2
    }

    doubleParam2() {
        return `Double ${this.parameter2}`
    }
}