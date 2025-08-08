import { mergeAndSort } from "../src/merge";

const collection_1: bigint[] = [8n,12n,20n]     // sorted min->max
const collection_2: bigint[] = [100n,5n]        // sorted max->min
const collection_3: bigint[] = [0n,9n]          // sorted min->max

function answer(big_array: bigint[]): bigint[] {        // so we don't have to hardcode expected results
    return big_array.slice().sort((a ,b) => {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
    });
}

function makeNegative(array: bigint[]): bigint[] {      // for negative edge cases
    return array.map(e => e * -1n).slice().reverse()
}

describe('unit tests', () => {
    test('standard case', () => {
        expect(mergeAndSort(
            collection_1,
            collection_2,
            collection_3)
        ).toStrictEqual(answer(
            collection_1
            .concat(collection_2)
            .concat(collection_3)
        ));
    });

    test('all empty arrays => returns empty array', () => {
        expect(mergeAndSort(
            [],
            [],
            [])
        ).toStrictEqual([]);
    });

    test('empty collection_1 => returns merged + sorted collections 2 and 3', () => {
        expect(mergeAndSort(
            [],
            collection_2,
            collection_3)
        ).toStrictEqual(answer(
            collection_2
            .concat(collection_3)
        ));
    });

    test('empty collection_2 => returns merged + sorted collections 1 and 3', () => {
        expect(mergeAndSort(
            collection_1,
            [],
            collection_3)
        ).toStrictEqual(answer(
            collection_1
            .concat(collection_3)
        ));
    });

    test('empty collection_3 => returns merged + sorted collections 1 and 2', () => {
        expect(mergeAndSort(
            collection_1,
            collection_2,
            [])
        ).toStrictEqual(answer(
            collection_1
            .concat(collection_2)
        ));
    });

    test('empty collections 2 and 3 => returns collection 1', () => {
        expect(mergeAndSort(
            collection_1,
            [],
            [])
        ).toStrictEqual(answer(
            collection_1
        ));
    });

    test('empty collections 1 and 3 => returns reversed collection 2', () => {
        expect(mergeAndSort(
            [],
            collection_2,
            [])
        ).toStrictEqual(answer(
            collection_2
        ));
    });

    test('empty collections 1 and 2 => returns collection 3', () => {
        expect(mergeAndSort(
            [],
            [],
            collection_3)
        ).toStrictEqual(answer(
            collection_3
        ));
    });

    test('all negative values', () => {
        expect(mergeAndSort(
            makeNegative(collection_1),
            makeNegative(collection_2),
            makeNegative(collection_3))
        ).toStrictEqual(answer(
            makeNegative(collection_1)
            .concat(makeNegative(collection_2))
            .concat(makeNegative(collection_3))
        ));
    });

    test('negative values in collection 1 only', () => {
        expect(mergeAndSort(
            makeNegative(collection_1),
            collection_2,
            collection_3)
        ).toStrictEqual(answer(
            makeNegative(collection_1)
            .concat(collection_2)
            .concat(collection_3)
        ));
    });

    test('negative values in collections 2 and 3 only', () => {
        expect(mergeAndSort(
            collection_1,
            makeNegative(collection_2),
            makeNegative(collection_3))
        ).toStrictEqual(answer(
            collection_1
            .concat(makeNegative(collection_2))
            .concat(makeNegative(collection_3))
        ));
    });

    test('empty collection 1, normal collection 2, negative collection 3', () => {
        expect(mergeAndSort(
            [],
            collection_2,
            makeNegative(collection_3))
        ).toStrictEqual(answer(
            collection_2
            .concat(makeNegative(collection_3))
        ));
    });
});