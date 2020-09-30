import {findUniqueNumber} from '.';

const arr1 = [1, 5, 1, 1, 1, 1];
const arr2 = [1, 1, 2];
const arr3 = [1, 1, 2, 1, 1, 1];

describe("配列に1つだけ違う数字が入っている。ユニークな数字を探してください。", () => {
  it("test1", () => {
    expect(findUniqueNumber(arr1)).toEqual(5)
  })

  it("test2", () => {
    expect(findUniqueNumber(arr2)).toEqual(2)
  })

  it("test3", () => {
    expect(findUniqueNumber(arr3)).toEqual(2)
  })
})
