import React from 'react'

// 自訂 function 組件名稱使用首字母大寫，大駝峰命名法
export default function JsxRender() {
  return (
    <>
      <h1>JSX中各種值render(渲染)範例</h1>
      <hr />
      <h2>number(數字)</h2>
      {/* 以下兩種都可以達到空白效果 */}
      {123} {1 - 1} {NaN}
      <br />
      {123}
      {'   '}
      {1 - 1}
      {'   '}
      {NaN}
      <hr />
      <h2>string(字串)</h2>
      hello
      {'   '}
      {'abc'}
      {'   '}
      {`price=${100 - 1}`}
      <hr />
      <h2>boolean(布林)</h2>
      {/* 不會渲染呈現 */}
      {true}
      {false}
      <hr />
      <h2>null/undefined</h2>
      {/* 不會渲染呈現 */}
      {null}
      {undefined}
      <hr />
      <h2>array(陣列)</h2>
      {/* 類似array.join('')，不管陣列裡是數字或字串類型，render 後都會變字串類型 */}
      {[1, 2, 3]}
      {['hello', 'a', 'b']}
      {/* 
          陣列裡面也可以使用 html 結構，但是要加 key 值，
          陣列裡面也可以使用 html 結構，但是要加 key 值，
          key 值就是 react 內部要用的 id，隨便給都可以，畫面不會 render
       */}
      {[<li key="111">1</li>, <li key="222">2</li>]}
      <hr />
      {/* Objects / Functions are not valid as a React child，使用 array 代替 */}
      {/* 不會渲染，會有主控台警告，不是React Child */}
      {/* 參考: https://github.com/orgs/mfee-react/discussions/91 */}
      <h2>object(物件)</h2>
      {/* {{ a: 1, b: 2 }} */}
      <hr />
      <h2>function(函式)</h2>
      {/* {() => {}} */}
      <hr />
    </>
  )
}
