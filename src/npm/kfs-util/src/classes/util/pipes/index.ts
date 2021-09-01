/**
 * Seals a class/function
 */
export function Sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

/**
 * Makes a class/function injectable to other classes
 */
export function Injectable() {}

/**
 * Allows a class/function to be injected to another class
 */
export function Inject() {}
