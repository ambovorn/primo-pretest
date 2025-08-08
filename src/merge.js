"use strict";
/*
    Primo PreTest Question #13
    By: Chanon Bovornvirakit
    Date: 08/08/2025
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeAndSort = void 0;
// Assumptions: collection_1 and collection_3 are already sorted from min->max
//              collection_2 is already sorted from max->min
// return array that is sorted from min->max
function mergeAndSort(collection_1, collection_2, collection_3) {
    function localMerge(array_1, array_2) {
        var length1 = array_1.length;
        var length2 = array_2.length;
        if (length1 == 0)
            return array_2; // if either of them are empty, just return the other
        else if (length2 == 0)
            return array_1;
        var i = 0, j = 0; // initialize pointers to iterate through arrays
        var merged = [];
        while (i < length1 && j < length2) { // push whichever number is smaller and increment pointer
            if (array_1[i] < array_2[j])
                merged.push(array_1[i++]);
            else
                merged.push(array_2[j++]);
        }
        while (i < length1)
            merged.push(array_1[i++]); // push any remaining numbers
        while (j < length2)
            merged.push(array_2[j++]);
        return merged;
    }
    var collections_1_3 = localMerge(collection_1, collection_3);
    return localMerge(collections_1_3, collection_2.slice().reverse());
}
exports.mergeAndSort = mergeAndSort;
