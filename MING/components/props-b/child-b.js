import { useState, useEffect } from 'react'

export default function ChildB({ setDataFromChild }) {
  // 子女元件狀態(內部私有)
  const [cData, setCData] = useState('child-b data')
  // 錯誤寫法:
  // 不可以直接寫在元件函式的主體，會有警告訊息或執行錯誤
  // 原因是setDataFromChild是setState，會造成re-render(重新渲染)
  // 對react元件來說具有副作用，需要在事件處理函式或useEffect中呼叫
  //
  // setDataFromChild(cData)

  // useEffect(() => {
  //   // 方式2: 第一次呈現渲染就執行
  //   setDataFromChild(cData)
  // }, [])

  return (
    <>
      <h3>ChildB</h3>
      <button
        onClick={() => {
          // 方式1: 利用事件處理函式執行
          setDataFromChild(cData)
        }}
      >
        送資料給Child A
      </button>
    </>
  )
}
