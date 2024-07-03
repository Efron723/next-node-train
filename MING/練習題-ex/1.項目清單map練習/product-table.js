// 導入時就自動轉為JS資料格式
import data from '@/data/Product.json'

export default function ProductTable() {
  console.log(data)
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </>
  )
}
