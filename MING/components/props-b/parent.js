import { useState } from 'react'
import ChildA from './child-a'
import ChildB from './child-b'

export default function Parent() {
  // 父母元件狀態(內部私有的)
  // const [pData, setPData] = useState('parent data')

  // 宣告一組專門要讓子女B元件回傳資料的狀態
  const [dataFromChild, setDataFromChild] = useState('')

  return (
    <>
      <h2>Parent</h2>
      {/* P->C 利用屬性直接傳給子女元件 */}
      <ChildA dataFromChild={dataFromChild} />
      {/* C->P 傳送設定狀態用的函式給子女B */}
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  )
}
