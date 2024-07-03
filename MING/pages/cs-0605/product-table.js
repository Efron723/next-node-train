// 導入時就自動轉為JS資料格式
import products from '@/data/Product.json'
// 第2步: 導入css modules檔案
import styles from '@/styles/product-table.module.css'

export default function ProductTable() {
  console.log(products)

  return (
    <>
      {/* .module.css 檔使用小駝峰命名的話可以這樣使用 */}
      {/* <table className={styles.myTable}> */}
      <table className={styles['my-table']}>
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
