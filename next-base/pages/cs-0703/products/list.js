import { useState, useEffect } from 'react'
// import data from '@/data/products.json'
import Link from 'next/link'

// 資料來源:
// https://my-json-server.typicode.com/eyesofkids/json-fake-data/products
//
// 資料樣貌(shape):
// [
//   {
//     "id": 1,
//     "picture": "https://via.placeholder.com/150",
//     "stock": 5,
//     "name": "iPhone 12 Pro",
//     "price": 25000,
//     "tags": "蘋果,大螢幕"
//   }
// ]

export default function List() {
  // 注意1: 初始值至少要空白陣列。初次render是用初始值，需要對應伺服器回應的資料類型。
  // 注意2: 在應用程式執行過程中，一定要保持狀態的資料類型(一定要是陣列)
  const [products, setProducts] = useState([])

  // 與伺服器作fetch獲得資料(建議寫在useEffect上面與外面比較容易維護管理)
  const getProducts = async () => {
    const url = 'http://localhost:3005/api/my-products'

    // 使用try-catch陳述式，讓和伺服器連線程式作錯誤處理
    try {
      const res = await fetch(url)
      const resData = await res.json()

      if (resData.status === 'success') {
        // 檢查是否為陣列資料類型(基本保護)
        if (Array.isArray(resData.data.products)) {
          // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render)
          setProducts(resData.data.products)
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  // 樣式2: didMount
  // 意義: 首次渲染之後，執行一次第一傳入參數函式中的程式碼，之後不會再執行
  useEffect(() => {
    // 呼叫與伺服器作fetch函式
    getProducts()
  }, [])

  return (
    <>
      <h1>商品列表頁</h1>
      <ul>
        {products.map((v, i) => {
          return (
            <li key={v.id}>
              <Link href={`/cs-0703/products/${v.id}`}>{v.name}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
