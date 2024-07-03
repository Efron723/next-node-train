// 導入時就自動轉為JS資料格式
// 檔案裡已經有 Product.json 檔案了
import products from '@/data/Product.json'

export default function ProductTable() {
  console.log(products)

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
          {products.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>
                  {/* 開頭要加 / 代表 public 絕對路徑 */}
                  <img src={`/pics/${v.photos.split(',')[0]}`} />
                </td>
                <td>{v.name}</td>
                <td>{v.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
