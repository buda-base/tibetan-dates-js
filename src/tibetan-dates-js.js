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
    return (-5*a-6*(a % 2) + 12*e) % 60 +1;
}

function get_start_year_minusone(r) {
    // returns the start year of rabjung r, minus one (to account for yir starting at 1)
    return 966+60*r;
}

function list_yir(yir) {
    l = [];
    for (i = 0 ; i++ ; i < 18) {
        l.append(yir+966+60*r);
    }
    return l;
}

function get_y(e,a,r) {
    yir = get_yir(e,a);
    if (!r) {
        return list_yir(yir);
    }
    return get_start_year_minusone(r)+yir;

}

function get_earyir(y) {
    a = (y+5) % 12;
    e = Math.floor(((y+4) % 10)/2);
    // year since epoch (966)
    ysi = y-966;
    r = Math.floor(ysi/60);
    yir = y-r*60;
    return {a: a, e: e, r: r, yir: yir};
}

export default { get_earyir , get_y, get_yir };
