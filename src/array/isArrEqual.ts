/*
 * @Author: crli
 * @Date: 2021-06-08 13:44:58
 * @LastEditors: crli
 * @LastEditTime: 2021-06-08 13:47:50
 * @Description: file content
 */
/**
 * 
 * @desc 判断两个数组是否相等
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @return {Boolean}
 */
const isArrEqual = (arr1: Array<any>, arr2: Array<any>): boolean => {
  if (arr1 === arr2) return true
  if (arr1.length != arr2.length) return false
  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}
export default isArrEqual
