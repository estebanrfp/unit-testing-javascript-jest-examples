import { arrayFruits, arrayColors } from '../arrays'

describe('Comprobaremos que existe un elemento', () => {
    test('¿Tiene una banana?', () => {
        expect(arrayFruits()).toContain('banana');
    });
    test('No contiene un platano', () => {
        expect(arrayFruits()).not.toContain('platano');
    });
    test('Comprobar el tamañoo de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(6);
    });
    test('Comprobaremos que existe un color', () => {
        expect(arrayColors()).toContain('azul');
    });
});
