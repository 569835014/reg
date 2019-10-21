import { RegExpClass } from '../types'
import * as number from './number'
import * as business from './business'

const REG:RegExpClass<RegExp> = {
  ...number,
  ...business
}
export default REG
