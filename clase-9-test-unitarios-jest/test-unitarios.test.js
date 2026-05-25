// ejemplo.test.js

const { suma, esPar } = require("./ejemplo");

// Ejemplo 1: Test de la función suma

test("suma 2 + 3 debe ser 5", () => {
  expect(suma(2, 3)).toBe(5);
});

test("suma -1 + 1 debe ser 0", () => {
  expect(suma(-1, 1)).toBe(0);
});

test("suma 0 + 0 debe ser 0", () => {
  expect(suma(0, 0)).toBe(0);
});

// Ejemplo 2: Test de la función esPar

test("4 es par", () => {
  expect(esPar(4)).toBe(true);
});

test("7 no es par", () => {
  expect(esPar(7)).toBe(false);
});

test("0 es par", () => {
  expect(esPar(0)).toBe(true);
});

// Ejemplo 3: Test con error intencionado

test("suma 2 + 2 debe ser 5 (test con error)", () => {
  expect(suma(2, 2)).toBe(5); // Esto fallará
});

// Ejemplo 4: Test para arrays usando otros métodos

test("array contiene un elemento específico", () => {
  const frutas = ["manzana", "banana", "pera"];
  expect(frutas).toContain("banana");
});

test("array tiene la longitud esperada", () => {
  const numeros = [1, 2, 3, 4];
  expect(numeros).toHaveLength(4);
});

test("arrays son iguales", () => {
  const esperado = [1, 2, 3];
  const resultado = [1, 2, 3];
  expect(resultado).toEqual(esperado);
});

test("array no contiene un elemento", () => {
  const colores = ["rojo", "azul", "verde"];
  expect(colores).not.toContain("amarillo");
});
