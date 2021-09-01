/**
 * A two dimensional matrix
 */
export class Matrix<T> {
    data: T[][];

    /**
     * Fetches an item from a nested array
     */
    get(row: number, column: number) {}

    /**
     * Inserts an item into a nested array
     */
    insert(row: number, column: number, value: T) {}

    /**
     * Removes an item from a nested array
     */
    remove(row: number, column: number) {}
}
