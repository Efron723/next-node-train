import express from 'express'
const router = express.Router()

// 資料庫使用
import { Op } from 'sequelize'
import sequelize from '#configs/db.js'
const { My_Product } = sequelize.models

// GET - 得到所有資料
router.get('/', async function (req, res) {
  // 如果需要看執行的sql可以用`findAll({ logging: console.log })`
  // 可以再用try...catch或處理如果沒找到資料
  const products = await My_Product.findAll()

  // 標準回傳JSON
  return res.json({ status: 'success', data: { products } })
})

// GET - 得到單筆資料(注意，有動態參數時要寫在GET區段最後面)
router.get('/:pid', async function (req, res) {
  // 轉為數字(最好都使用一致的命名，從資料庫的主鍵名稱(這裡用id)到傳入的動態參數pid，這裡的作法比較不好容易搞混，應統一用pid或id其中一種)
  const id = Number(req.params.pid)

  // 由主鍵來尋找單筆資料
  const product = await My_Product.findByPk(id, {
    raw: true, // 只需要資料表中資料
  })

  return res.json({ status: 'success', data: { product } })
})

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'my-products' })
// })

export default router
