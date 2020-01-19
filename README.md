# Tibetan years conversion program

Toy tool to convert between Tibetan year descriptions and Gregorian years.

### values for element and animal

In order to keep this tool focused, we don't manipulate names, only integers. Our conventions are:
- year in Rabjung: first year of the Rabjung is numbered `1`
- animals and elements are in their usual order, starting at `Rabbit` and `Fire` respectively, represented by integers starting at `0`

For for instance 2019:
- year in Rabjung: 33
- animal: 8 (Pig)
- element: 1 (Earth)
- rabjung: 17


### Formula behind the calculation

Computing the formula of the year in rabjung from the element + animal has been a fun exercise. The solution that is usually pointed to is [this one](https://www.hermetic.ch/cal_stud/tib_year.htm) which looks very esoteric so here we demonstrate our formula twice:
- [through intuitive and visual explanation](visual_demonstration.md)
- [through algebra](math_demonstration.md)
