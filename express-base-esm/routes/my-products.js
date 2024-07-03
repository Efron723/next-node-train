import express from 'express'
const router = express.Router()

// 使用一般sql查詢的方式引入db
import db from '#configs/mysql.js'

// GET - 得到所有資料
router.get('/', async function (req, res) {
  const [rows] = await db.query('SELECT * FROM `my_product`')
  const products = rows

  // 標準回傳JSON
  return res.json({ status: 'success', data: { products } })
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
