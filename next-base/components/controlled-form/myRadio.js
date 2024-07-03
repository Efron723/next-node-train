import React, { useState } from 'react'

export default function MyRadio() {
  // 選項按鈕群組 radio button group
  const petOptions = ['狗', '貓', '倉鼠']
  // 狀態值代表從中選擇一個，空白字串代表沒有選擇
  const [pet, setPet] = useState('')

  // 核取方塊群組 checkbox group - 物件陣列
  const initState = petOptions.map((v, i) => {
    return { id: i + 1, label: v, checked: false }
  })

  // 宣告物件陣列的狀態
  const [myPets, setMyPets] = useState(initState)
  return (
    <>
      <div title="radio-button-group">
        <h2>選項按鈕群組</h2>
        {petOptions.map((v, i) => {
          // 注意如果<>...</>要加key屬性要改為<Fragment>...</Fragment>元件
          return (
            <label
              // 只有當初次render後不會再有更動(新增刪除修改)，才能使用索引作為key
              key={i}
            >
              <input
                type="radio"
                value={v}
                // 每個radio選項用自己本身的v和狀態pet比較，相符會是true代表被選中
                checked={v === pet}
                onChange={(e) => {
                  // 第一種寫法: (推薦)有加value屬性和事件物件時，和其它可控元件寫法類似
                  setPet(e.target.value)
                  // 第二種寫法: 直接用v值代入
                  // setPet(v)
                }}
              />
              {v}
            </label>
          )
        })}
      </div>
    </>
  )
}
