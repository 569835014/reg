import {DynamicReg} from '../types'

/**
 * 最多有N位小数的正则
 * @param num
 * @constructor
 */
export const RetainDecimal:DynamicReg = (num:number)=>{
  return new RegExp(`^(\d+)(.\d{0,${num})?$`)
}
