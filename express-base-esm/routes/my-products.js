import express from 'express'
const router = express.Router()

// 使用一般sql查詢的方式引入db
import db from '#configs/mysql.js'

// GET - 得到所有資料
router.get('/', async function (req, res) {
  // 獲取query查詢字串
  // const {
  //    page = 1, //
  //    perpage = 10, //
  //    sort ='id' ,
  //    order ='asc' ,
  // } = req.query

  // 排序用
  const sort = req.query.sort || 'id'
  const order = req.query.order || 'asc'
  const orderby = `ORDER BY ${sort} ${order}`

  // 分頁用
  const page = Number(req.query.page) || 1
  const perpage = Number(req.query.perpage) || 10 //預設每頁為10筆資料
  const limit = perpage
  const offset = (page - 1) * perpage

  const [rows] = await db.query(
    `SELECT * FROM my_product ${orderby} LIMIT ${limit} OFFSET ${offset}`
  )
  const products = rows

  //計算資料筆數
  const [rows2] = await db.query(`SELECT COUNT(*) AS count FROM my_product`)
  const { count } = rows2[0]

  // 計算目前總共幾頁
  const pageCount = Math.ceil(count / perpage)

  // 標準回傳JSON
  return res.json({
    status: 'success',
    data: {
      total: count, // 總筆數
      pageCount, // 總共幾頁
      page, // 目前第幾頁
      perpage, // 目前每頁幾筆資料
      products, //本頁商品資料陣列
    },
  })
})

// GET - 得到單筆資料(注意，有動態參數時要寫在GET區段最後面)
router.get('/:pid', async function (req, res) {
  // 轉為數字(最好都使用一致的命名，從資料庫的主鍵名稱(這裡用id)到傳入的動態參數pid，這裡的作法比較不好容易搞混，應統一用pid或id其中一種)
  const id = Number(req.params.pid)

  const [rows] = await db.query('SELECT * FROM `my_product` WHERE id = ?', [id])
  const product = rows[0]

  return res.json({ status: 'success', data: { product } })
})

export default router
