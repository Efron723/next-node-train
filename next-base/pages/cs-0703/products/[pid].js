import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Loader from '@/components/loader'

export default function Detail() {
  // 第一步:  宣告路由器
  // router.query 物件值，包含了pid屬性
  // router.isReady 布林值，初始為false，如果此頁面完成"水合作用"後，會改變為true，此時才能得到query值
  const router = useRouter()

  // 物件類型的狀態的初始值，建議是一個要描述出裡面有什麼屬性的物件
  const [product, setProduct] = useState({
    id: 0,
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  })

  // 載入資料的狀態信號值，true代表載入資料中
  // 初始值設定為true代表一開始就載入資料，不呈現預設值
  const [isLoading, setIsLoading] = useState(true)

  // 與伺服器作fetch獲得資料(建議寫在useEffect上面與外面比較容易維護管理)
  const getProduct = async (pid) => {
    const url = 'http://localhost:3005/api/my-products/' + pid

    // 使用try-catch陳述式，讓和伺服器連線程式作錯誤處理
    try {
      const res = await fetch(url)
      // product資料在data.data.product
      const resData = await res.json()

      if (resData.status === 'success') {
        // 檢查是否為物件資料類型(基本保護)
        if (resData.data.product.id) {
          // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render)
          setProduct(resData.data.product)

          // 關閉載入動畫，撥放1.5秒
          setTimeout(() => {
            setIsLoading(false)
          }, 1500)
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  // 第二步: 用useEffect監聽router.isReady的變動
  // 樣式3: didMount+didUpdate
  useEffect(() => {
    if (router.isReady) {
      // 這裡可以得到router.query(pid屬性)值
      // 動態路由得到的pid屬性值都是字串值(比對時要小心)
      console.log(router.query)
      // 解構出pid屬性值
      const { pid } = router.query

      // 呼叫getProduct
      getProduct(pid)
    }
    // 註解: 讓eslint略過一行檢查
    // eslint-disable-next-line
  }, [router.isReady])

  return (
    <>
      <h1>商品詳細頁</h1>
      <hr />
      {/* 用isLoading狀態進行條件式渲染，決定要呈現內容還是載入指示動畫 */}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2>{product.name}</h2>
          <p>ID: {product.id}</p>
          <p>價格: {product.price}</p>
        </>
      )}
    </>
  )
}
