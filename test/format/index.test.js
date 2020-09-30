import { format } from '.';

const str1 = 'abcabc';
const str2 = 'aaa';
const str3 = 'abccccccccaaaaaaaaa';

describe("もっとも短い単語を探し、その文字数を返してください。", () => {
  it("test1", () => {
    expect(format(str1)).toEqual('abcabc')
  })

  it("test2", () => {
    expect(format(str2)).toEqual('a')
  })

  it("test3", () => {
    expect(format(str3)).toEqual('abca')
  })
})
