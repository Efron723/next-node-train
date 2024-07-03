import { useState } from 'react'

export default function CRender() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>JSX中條件式渲染(conditional render)</h1>
      <hr />
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <hr />
      {/* 
        如果不使用轉換布林值、運算子等等，這邊的 total 初始值是 0 
        所以邏輯中斷，畫面上會先顯示 0，不要用這種方式
       */}
      {/* if表達式語法(&&運算子)。因為使用的是falsy判斷，造成不精確，0或是NaN一樣會呈現 */}
      {total && <p>目前的total值是{total}</p>}
      {/* 強制轉換前面的判斷式為布林值 */}
      {Boolean(total) && <p>目前的total值是{total}</p>}
      {!!total && <p>目前的total值是{total}</p>}
      {/* 使用比較運算子，作更精確的運算 */}
      {total > 0 && <p>目前的total值是{total}</p>}
      {/* 使用三元運算子 */}
      {total ? <p>目前的total值是{total}</p> : ''}
    </>
  )
}
