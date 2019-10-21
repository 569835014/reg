/**
 * 身份证
 */
export const idCard:RegExp = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/

/**
 * 手机号
 */
export const phone:RegExp = /^1(3|4|5|7|8)\d{9}$/


/**
 * 邮箱
 */
export const email:RegExp = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/

/**
 * url地址
 */
export const url:RegExp = /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/

/**
 * ip地址ip
 */
export const ip:RegExp = /(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)/

/**
 * qq号码
 */
export const qq:RegExp = /[1-9]([0-9]{4,10})/
