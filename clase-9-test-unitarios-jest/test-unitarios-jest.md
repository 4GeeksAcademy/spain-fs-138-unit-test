# Test Unitarios con Jest

## ¿Qué son los test unitarios?

Los **test unitarios** son pequeñas pruebas automáticas que verifican que una parte específica de tu código (por ejemplo, una función o método) funciona correctamente. El objetivo es detectar errores lo antes posible y asegurarse de que cada componente individual hace lo que se espera.

- **Unidad**: Es la parte más pequeña de tu código que se puede probar (normalmente una función).
- **Test**: Es el código que comprueba que la unidad funciona como debería.

## ¿Por qué son importantes?

- Ayudan a encontrar errores rápidamente.
- Facilitan el mantenimiento del código.
- Permiten refactorizar con confianza.
- Mejoran la calidad del software.

## ¿Qué es Jest?

[Jest](https://jestjs.io/) es una herramienta (framework) para escribir y ejecutar test unitarios en JavaScript. Es muy popular porque es fácil de usar y configurar.

## ¿Cómo funciona Jest?

1. Escribes funciones en tu código.
2. Escribes test que comprueban que esas funciones hacen lo que deberían.
3. Ejecutas Jest y te dice si los test pasan o fallan.

## Ejemplo básico

Supongamos que tienes una función que suma dos números:

```javascript
// archivo: suma.js
function suma(a, b) {
  return a + b;
}
module.exports = suma;
```

Ahora escribimos un test para esa función:

```javascript
// archivo: suma.test.js
const suma = require('./suma');

test('suma 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});
```

## Explicación del test
- `test(...)`: Define un test. El primer parámetro es una descripción.
- `expect(...)`: Especifica el resultado que esperamos.
- `toBe(...)`: Compara el resultado real con el esperado.

## ¿Cómo ejecutar los test?

1. Instala Jest:
   ```bash
   npm install --save-dev jest
   ```
2. Añade en tu `package.json`:
   ```json
   "scripts": {
     "test": "jest"
   }
   ```
3. Ejecuta:
   ```bash
   npm test
   ```

## Métodos comunes de Jest
- `test`: Define un test.
- `expect`: Realiza una afirmación.
- `toBe`: Compara valores primitivos.
- `toEqual`: Compara objetos o arrays.

## Ejemplo con arrays
```javascript
// archivo: array.test.js
test('comprobar que el array contiene un elemento', () => {
  const lista = ['manzana', 'banana', 'pera'];
  expect(lista).toContain('banana');
});
```

## Consejos para principiantes
- Escribe test para cada función importante.
- Los test deben ser simples y claros.
- Si un test falla, revisa la función y el test.

## Tipos de exportación e importación en JavaScript

En JavaScript existen dos formas principales de exportar e importar código entre archivos:

### 1. CommonJS (require / module.exports)
- Es el sistema clásico usado en Node.js.
- Ejemplo de exportación:
  ```javascript
  // archivo: suma.js
  function suma(a, b) { return a + b; }
  module.exports = suma;
  // o para exportar varias funciones:
  module.exports = { suma, otraFuncion };
  ```
- Ejemplo de importación:
  ```javascript
  // archivo: suma.test.js
  const suma = require('./suma');
  // o para varios:
  const { suma, otraFuncion } = require('./suma');
  ```

### 2. ES Modules (import / export)
- Es el sistema moderno estándar de JavaScript.
- Ejemplo de exportación:
  ```javascript
  // archivo: suma.js
  export function suma(a, b) { return a + b; }
  // o para exportar por defecto:
  export default suma;
  ```
- Ejemplo de importación:
  ```javascript
  // archivo: suma.test.js
  import { suma } from './suma';
  // o importación por defecto:
  import suma from './suma';
  ```

### ¿Dónde se indica el tipo de importación?
- Por defecto, Node.js usa CommonJS (`require`).
- Para usar ES Modules (`import`), debes indicar en tu `package.json`:
  ```json
  {
    "type": "module"
  }
  ```
- Si no pones nada, se usa CommonJS. Si pones `"type": "module"`, puedes usar `import` y `export`.

**Resumen:**
- Usa `require` y `module.exports` para proyectos clásicos o si no has cambiado nada en `package.json`.
- Usa `import` y `export` si tu proyecto es moderno y tienes `"type": "module"` en `package.json`.
