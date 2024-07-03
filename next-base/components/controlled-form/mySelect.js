import React, { useState } from 'react'

export default function MySelect() {
  // 下拉清單select
  const cityOptions = [
    '台北市',
    '新北市',
    '桃園市',
    '台中市',
    '台南市',
    '高雄市',
  ]
  // 定義下拉清單的狀態字串值
  // 空白字串代表沒有選中任何值
  const [city, setCity] = useState('')

  return (
    <>
      <div title="select">
        <h2>下拉清單select</h2>
        <select
          // 在react中修改了select有value和onChange綁定狀態的語法
          value={city}
          onChange={(e) => {
            setCity(e.target.value)
          }}
        >
          {/* 對照city狀態初始值用的選項 */}
          <option value="">請選擇都市</option>
          {cityOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
      </div>
    </>
  )
}
