import React from 'react'

export default function JsxMap() {
  // 以ul-li渲染呈現以下陣列成員
  const aa = [1, 4, 9, 16]

  const ab = aa.map((v, i) => {
    return <li key={i}>{v}</li>
  })

  // ab相當於
  //   [<li key={0}>1</li>,
  //   <li key={1}>4</li>,
  //   <li key={2}>9</li>,
  //   <li key={3}>16</li>]

  return (
    <>
      <h1>JSX中陣列map範例</h1>
      <hr />
      <ul>{ab}</ul>
      {/* 實作不需要再多在上面宣告一個ab，直接在jsx中寫map即可 */}
      <ul>
        {aa.map((v, i) => {
          return <li key={i}>{v}</li>
        })}
      </ul>
    </>
  )
}
