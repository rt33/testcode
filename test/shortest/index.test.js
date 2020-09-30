import { shortest } from '.'

const str1 = 'red blue yellow green';
const str2 = 'red';
const str3 = 'red re f fffff sfdsafdsafdsafdsa';

describe("もっとも短い単語を探し、その文字数を返してください。", () => {
  it("test1", () => {
    expect(shortest(str1)).toEqual(3)
  })

  it("test2", () => {
    expect(shortest(str2)).toEqual(3)
  })

  it("test3", () => {
    expect(shortest(str2)).toEqual(3)
  })
})
