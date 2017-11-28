$(document).ready(function () {

	//TODO: incomplete

    // var init = "RR..LRL";
    // var animation = new Animation(init);
    // Displays "XX..XXX"
    // animation.animate(3);
    // Displays ".X.XX.."

 

});

class Animation {

    constructor(init) {
        this.init = init;
        //because particles can overlap, a string data structure isn't enough
        //I would try an array of arrays
    }

    animate(speed) {
        //loop through string
        //move char L negative array position
        //move char R positive array position
    }

    output() {
        //output init, where L and R are represented as X
    }
}