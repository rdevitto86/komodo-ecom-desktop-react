export function Sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

export function Injectable() {}
export function Inject() {}
