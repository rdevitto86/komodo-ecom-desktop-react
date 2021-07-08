/**
 * Omits specified properties from extensible classes
 * @param {T} classRef object/class to omit properties from
 * @param {K[]} keys list of properties names to be removed
 * @return {Omit<T, K[]>} object/class with omitted properties
 */
export default function OmitProps<T, K extends keyof T>(
    classRef: T,
    keys: readonly K[],
): Omit<T, typeof keys[number]> {
    if (classRef && keys && keys.length > 0) {
        // loop through keys and remove specified props
        for (let i = 0, len = keys.length; i < len; i++) {
            if (classRef[keys[i]]) {
                delete classRef[keys[i]];
            }
        }
    }
    return classRef;
}
