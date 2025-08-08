/*
    Primo PreTest Question #13
    By: Chanon Bovornvirakit
    Date: 08/08/2025
*/

// Assumptions: collection_1 and collection_3 are already sorted from min->max
//              AND collection_2 is already sorted from max->min
// return array that is sorted from min->max
export function mergeAndSort(collection_1: bigint[], collection_2: bigint[], collection_3: bigint[]): bigint[] {
    function localMerge(array_1: bigint[], array_2: bigint[]): bigint[] {       // assumes that both arrays are sorted from min->max already
        const length1: number = array_1.length;
        const length2: number = array_2.length;

        if (length1 == 0) return array_2;       // if either of them are empty, just return the other
        else if (length2 == 0) return array_1;

        let i = 0, j = 0;           // initialize pointers to iterate through arrays
        let merged: bigint[] = [];
        while (i < length1 && j < length2) {        // push whichever number is smaller and increment respective pointer
            if (array_1[i] < array_2[j]) merged.push(array_1[i++])
            else merged.push(array_2[j++]);
        }
        while (i < length1) merged.push(array_1[i++])       // push any remaining numbers
        while (j < length2) merged.push(array_2[j++])
        return merged;
    }
    const collections_1_3 = localMerge(collection_1, collection_3)

    return localMerge(collections_1_3, collection_2.slice().reverse())
}

