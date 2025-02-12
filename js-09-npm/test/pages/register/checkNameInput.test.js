/**
 *  TDD
 *  TDD (Test-Driven Development) es una metodología de desarrollo 
 *  de software donde las pruebas unitarias se escriben antes del 
 *  código de producción.
 * 
 *  Ventajas de TDD: 
 *  - Te obliga a pensar en los requerimientos antes de codificar.
 *  - Mejora la calidad del código al asegurar que está cubierto por pruebas.
 *  - Facilita la detección de errores rápidamente.
 * 
 */



import { checkNameInput } from "../../../src/pages/register/checkNameInputs";



test("verificar que el nombre ingresado sea válido", () => {

expect (checkNameInput("Arenita")). toBe(true);
expect (checkNameInput("Li")). toBe(true);
expect (checkNameInput("Serch Manuel")). toBe(true);
expect (checkNameInput("Arenita")). toBe(true);
expect (checkNameInput("kati")). toBeTruthy();

});

test("Verificar que el nombre ingresado sea inválido", () =>{
    expect (checkNameInput("")). toBe(false);
    expect (checkNameInput("   David ")). toBe(false );
    expect (checkNameInput("12")). toBe(false);
    expect (checkNameInput("     ")). toBeTruthy(false);
    expect( checkNameInput("D") ).toBeFalsy();

});
test ("Verificar que el nombre sea null o undefined", ()=>{
    expect( checkNameInput(null) ).toBeFalsy();
    expect( checkNameInput(undefined) ).toBeFalsy();
} );
