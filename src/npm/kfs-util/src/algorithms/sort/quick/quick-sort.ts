/**
 * Implements a quick sort algorithm
 * @complexity
 *  - time: best => O(n log(n)), worst => O(n^2)
 *  - space: O(n)
 */
export default function QuickSort(data: number[]) {
    if (!(data instanceof Array)) {
        return data;
    }

    // recursively traverse input data until sorted
    (function _sort(sData, sStart, sEnd) {
        // BASE CASE: check if pivot is greater/equal to end
        if (sStart >= sEnd) {
            return;
        }

        // calculate new pivot
        const index = ((pData, pStart, pEnd) => {
            const pivotValue = pData[pEnd];
            let pivotIndex = pStart;

            // loop through remaining array elements and swap greater/lesser values
            for (let i = pStart; i < pEnd; i++) {
                // swap element less than pivot
                if (pData[i] < pivotValue) {
                    // swap memeory references of array elements
                    [pData[i], pData[pivotIndex]] = [pData[pivotIndex], pData[i]];
                    pivotIndex++;
                }
            }

            // re-position pivot to middle of sub-array
            [pData[pivotIndex], pData[pEnd]] = [pData[pEnd], pData[pivotIndex]];
            return pivotIndex;
        })(sData, sStart, sEnd); // pivot calculation entry

        // execute quicksort of left and right sub-arrays
        _sort(sData, sStart, index - 1); // left array
        _sort(sData, index + 1, sEnd); // right array
    })(data, 0, data.length - 1); // _sort entry
}
