import { DynamicReg, RegExpClass } from '../types'
import * as number from './number'
import * as business from './business'
import * as dynamic from './dynamic'
import * as string from './str'

const REG: RegExpClass<RegExp | DynamicReg> = {
  ...number,
  ...business,
  ...dynamic,
  ...string
}
export default REG
