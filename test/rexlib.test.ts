import Reg from "../src/index"

/**
 * Reg test
 */
describe("Reg测试", () => {
  it("Reg的属性都是正则", () => {
    Object.keys(Reg).every((key)=>{
      expect(Reg[key]).toBeInstanceOf(RegExp)
    })
  })
})

describe('数字类型正则测试',()=> {
  it('Natural:自然数测试', ()=> {
    expect(Reg.Natural.test('-4')).toBeFalsy()
    expect(Reg.Natural.test('-4.2')).toBeFalsy()
    expect(Reg.Natural.test('2.1')).toBeFalsy()
    expect(Reg.Natural.test('0')).toBeTruthy()
    expect(Reg.Natural.test('-0')).toBeFalsy()
    expect(Reg.Natural.test('1')).toBeTruthy()
  })
  it('Positive:大于0的数字', ()=> {
    expect(Reg.Positive.test('-4')).toBeFalsy()
    expect(Reg.Positive.test('-4.2')).toBeFalsy()
    expect(Reg.Positive.test('2.1')).toBeTruthy()
    expect(Reg.Positive.test('0')).toBeTruthy()
    expect(Reg.Positive.test('-0')).toBeFalsy()
    expect(Reg.Positive.test('1')).toBeTruthy()
  })
})

