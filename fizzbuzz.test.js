const fizzbuzz = require('./fizzbuzz');
describe('fizzbuzz', ()=> {

    test('should print  and error message if the argument', ()=> {
        const expected = 'Error: The argument must be a number';
        const result = fizzbuzz("16");
        expect(expected).toBe(result);
    })

    test('should print 1 if they receive 1', ()=> {
        //Que esperamos
        const expected = 1;
        //Cual es el resultadod e la operacion
        const result = fizzbuzz(1);
        //entonces esperamos que
        expect(expected).toBe(result);
    });

    test('Should print fizz if they receive 3', ()=> {
        const expected = 'fizz';
        const result = fizzbuzz(3);
        expect(expected).toBe(result);
    });

    test('Should print fizz if they receive a multiple of 3', ()=> {
        const expected = 'fizz';
        const result = fizzbuzz(6);
        expect(expected).toBe(result);
    });

    test('Should print buzz if they receive 5', ()=> {
        const expected = 'buzz';
        const result = fizzbuzz(5);
        expect(expected).toBe(result);
    });

    test('Should print buzz if they receive a multiple of 5', ()=> {
        const expected = 'buzz';
        const result = fizzbuzz(10);
        expect(expected).toBe(result);
    });
    test('Should print fizzbuzz if they receive a multiple of 3 and 5', ()=> {
        const expected = 'fizzbuzz';
        const result = fizzbuzz(15);
        expect(expected).toBe(result);
    });
});

