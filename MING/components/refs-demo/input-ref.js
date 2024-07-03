import { useRef } from 'react'

export default function InputRef() {
  // 1. 初始值為`null`，要對應表單元素的API，例如`getElementById`
  // 獲取元素參照時，沒得到時會回傳`null`
  // 呼叫後 inputRef 會是一個物件 `{ current: null }`
  const inputRef = useRef(null)

  return (
    <>
      <h2>input使用refs(不可控)</h2>
      {/*  2. 定義ref值對應 */}
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          // 3. 這裡已得到元件參照，可以直接呼叫API
          alert(inputRef?.current?.value)
        }}
      >
        獲得值
      </button>
    </>
  )
}
