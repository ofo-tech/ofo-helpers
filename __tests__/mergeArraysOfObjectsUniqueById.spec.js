const { mergeArraysOfObjectsUniqueById } = require("../index");

describe("Merge Arrays of Objects Unique By ID", () => {
  test("it should return an array unique by key id", () => {
    const input1 = [{ id: 1 }, { id: 1 }, { id: 4 }, { id: 1 }];
    const input2 = [{ id: 6 }, { id: 9 }, { id: 4 }, { id: 1 }];

    const output = [{ id: 1 }, { id: 4 }, { id: 6 }, { id: 9 }];

    const result = mergeArraysOfObjectsUniqueById(input1, input2);
    expect(result[0].id).toEqual(output[0].id);
    expect(result[1].id).toEqual(output[1].id);
    expect(result[2].id).toEqual(output[2].id);
    expect(result[3].id).toEqual(output[3].id);
  });
});