import {Enum} from 'enumify';

class Marking extends Enum {
    static match(value) {
        switch (value) {
            case Marking.X.value:
                return Marking.X;
            case Marking.O.value:
                return Marking.O;
            case Marking.EMPTY.value:
                return Marking.EMPTY;
            default:
                return null;
        }
    }
}

Marking.initEnum({
    X: {
        get value() { return 1 },
        get inverse() { return Marking.O }
    },
    O: {
        get value() { return -1 },
        get inverse() { return Marking.X }
    },
    EMPTY: {
        get value() { return 0 }
    }
});


export default Marking