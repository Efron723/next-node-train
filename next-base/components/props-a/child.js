import React from 'react'

// 子女元件可以從函式的傳入參數得到父母傳給它的值
// props必定是一個物件
// 在傳入參數中解構提取所有的屬性成為變數(!!注意一定要加花括號{}才是解構語法!!)
export default function Child({
  string = 'react', // 這裡可以再使用預設值的語法，作為預設屬性值
  number = 123,
  boolean = false,
  array = [],
  object = {},
  functions = () => {},
}) {
  return (
    <>
      <h3>Child</h3>
      <p>string = {string}</p>
      <p>number = {number}</p>
      <p>boolean = {boolean ? 'true' : 'false'}</p>
      <p>array = {JSON.stringify(array)}</p>
      <p>object = {JSON.stringify(object)}</p>
      <p>function(1,2) = {functions(1, 2)}</p>
    </>
  )
}
