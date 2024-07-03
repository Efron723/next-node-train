import { useState } from 'react'
// 因為使用import圖片的方式，所以需要引入Image元件
import Image from 'next/image'

// 範例資料
import data from '@/data/books.json'

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

export default function BookList() {
  // 設定到初始狀態前，先擴增一個代表是否有加入收藏的屬性fav(布林，預設為false)
  const initState = data.map((v, i) => {
    return { ...v, fav: false }
  })

  // 宣告狀態 因為需要加入收藏(畫面上需要改變)，所以導入的資料需要轉化為狀態
  const [books, setBooks] = useState(initState)

  const handleToggleFav = (isbn) => {
    const nextBooks = books.map((v, i) => {
      // 如果符合(isbn=傳入isbn)，回傳修改其中屬性fav的值作邏輯反相
      if (v.isbn === isbn) return { ...v, fav: !v.fav }
      // 否則保持原本的物件值
      else return v
    })

    setBooks(nextBooks)
  }

  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map((v, i) => {
            return (
              <tr key={v.isbn}>
                <td>{v.isbn}</td>
                <td>{v.title}</td>
                <td>{v.author}</td>
                <td>
                  <Image
                    onClick={() => {
                      handleToggleFav(v.isbn)
                    }}
                    src={v.fav ? bookmarkIconFill : bookmarkIcon}
                    alt=""
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
