import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function EffectPattern() {
  const [total, setTotal] = useState(0)

  // 樣式1: 沒有第二傳入參數
  // 意義: 每次渲染(render)之後(after)，會執行第一傳入參數函式中程式碼
  // 用途: 一般應用很少用到。通常要作記錄或除錯用，在一些特殊的自訂勾子中會使用到
  useEffect(() => {
    // console.log('每次渲染(render)之後(after)，會執行第一傳入參數函式中程式碼')
  })

  // 樣式2: 第二傳入參數總是保持空陣列
  // 意義: 首次渲染之後，執行一次第一傳入參數函式中的程式碼，之後不會再執行
  // 用途: 最常使用樣式(70~80%)，對照componentDidMount(didMount)
  //      用於首次渲染後，用fetch/ajax和伺服器資料庫要求資料。整合其它第三方應用。
  useEffect(() => {
    // console.log(
    //   '首次渲染(render)之後(after)，執行一次第一傳入參數函式中的程式碼，之後不會再執行'
    // )
  }, [])
  // ^^ 相依變數陣列。保持空白陣列的意思，代表它不與任何變數相依，"套用有加入第二參數的預設行為"

  // 樣式3: 第二傳入參數中有相依變數
  // 意義: 首次渲染之後，執行一次第一傳入參數函式中的程式碼。之後當相依變數有更動時，會再執行一次其中程式碼。
  // 用途: 第二常用樣式，近似對照componentDidMount(didMount) + componentDidUpdate(didUpdate)
  //       1. 狀態異步解決方案之一。2. 狀態作為屬性傳入子元件同步化。
  //       3. 狀態與變數連鎖變動(A=>B=>C)。4. 同一個元件要套用不同資料
  useEffect(() => {
    console.log(
      '首次渲染之後，執行一次第一傳入參數函式中的程式碼。之後當相依變數有更動時，會再執行一次其中程式碼。'
    )
  }, [total])
  // ^^^^^^^ total加入相依變數陣列中，代表監聽total狀動的更動(change)事件
  // 注意1: useEffect中的程式碼執行，是和render有絕對關係。
  //      因此能加入到相依變數陣列中的變數，只有state和props(或是從兩者計算衍生的變數)
  // 注意2: 決定相依變數更動的原則是採用"參照(引用)相等性原則(referential equality)"
  //        `Object.is`或是`===`

  // 樣式4: 第1個傳入參數函式的回傳值(也是一個函式)，通常搭配樣式2一起用
  // 意義: 元件被移出真實DOM之前(before)執行一次，近似於componentWillUnmount(WillUnmount)
  // 用途: 特定使用情況，很少用到。作某些元件被移出前的清理工作(cleanup)
  useEffect(() => {
    return () => {
      console.log('元件被移出真實DOM之前(before)執行一次')
    }
  }, [])

  return (
    <>
      <h1>Effect應用4個樣式範例</h1>
      <hr />
      <Link href="/">連至首頁</Link>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
    </>
  )
}
