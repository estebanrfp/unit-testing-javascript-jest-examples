// despues de cada prueba
afterEach(() => console.log('Después de cada prueba'));
afterAll(() => console.log('Después de todas las pruebas'));

// antes de cada prueba
beforeAll(() => console.log('Antes de todas las pruebas'));
beforeEach(() => console.log('Antes de cada las prueba'));

describe('preparar antes de ejecutar', () => {
    test('Es verdadero', () => {
        expect(true).toBeTruthy();
    });
});
