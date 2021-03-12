/**
 * @type
 * @description defines allowed data structures
 */
type DataStructure = number[]; // TODO - handle sorting of Maps and strings

/**
 * @class
 * @version 1.0
 * @description implements an insertion sort algorithm
 * @complexity
 *  - time: best => O(n), worst => O(n^2)
 *  - space: best => O(1), worst => O(n)
 */
export default class InsertionSort {
    /**
     * @public
     * @static
     * @function InsertionSort.sort
     * @description executes an insertion sort on a given iterable data structure
     * @param {DataStructure} data data structure to sort
     * @example
     *  const arr = [3,4,1,2];
     *  InsertionSort.sort(arr);
     *  console.log(arr); // arr = [1,2,3,4];
     */
    static sort(data: DataStructure) {
        // validate input data
        if (!(data instanceof Array)) {
            return;
        }

        // loop through all elements and sort in-place
        for (let i = 1, len = data.length; i < len; i++) {
            const current = data[i];

            // last element of sorted sub-array
            let j = i - 1;

            // loop through sorted side until all values are adjusted
            while ((j > -1) && (current < data[j])) {
                // swap next with current
                data[j + 1] = data[j];
                j--;
            }

            // swap unsorted element with sorted one
            data[j + 1] = current;
        }
    }
}
