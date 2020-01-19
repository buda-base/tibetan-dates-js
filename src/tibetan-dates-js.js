/** 
 * @private
 * @module tibetan-dates-js
 * @license MIT
 * @author Elie Roux (Buddhist Digital Resource Center)
 */

// variable name conventions:
// e = element (starting at fire = 0)
// a = animal (starting at Rabbit = 0)
// yir = year in Rabjung, starting at 1
// r = rabjung number
// y = Gregorian year

function get_yir(e, a) {
    // most tricky calculation, see the various demonstrations
    var res = (-5*a-6*(a % 2) + 12*e) % 60;
    // JavaScript's % operator computes the remainder so it can be negative:
    return res < 0 ? res+61 : res+1;
}

function get_start_year_minusone(r) {
    // returns the start year of rabjung r, minus one (to account for yir starting at 1)
    return 966+60*r;
}

function list_yir(yir) {
    var l = [];
    console.log(yir);
    for (var i = 0 ; i < 18 ; i++) {
        console.log(yir+966+60*i);
        l.push(yir+966+60*i);
    }
    console.log(l);
    return l;
}

function get_y(e,a,r) {
    var yir = get_yir(e,a);
    if (!r) {
        return list_yir(yir);
    }
    return get_start_year_minusone(r)+yir;

}

function get_earyir(y) {
    var a = (y+5) % 12;
    var e = Math.floor(((y+4) % 10)/2);
    // from Svante Janson
    var r = Math.ceil((y-1026)/60);
    // Janson gives y-6 % 60 but that makes year 60 numbered 0
    var yir = ((y-7) % 60) + 1;
    return {a: a, e: e, r: r, yir: yir};
}

export default { get_earyir , get_y, get_yir };
