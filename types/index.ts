
export interface RegExpClass<T> {
  [key:string]:T
}

export type DynamicReg = (...arg:any[])=> RegExp
