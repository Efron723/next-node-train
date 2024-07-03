import { useState } from 'react'
// 範例資料
import data from '@/data/books.json'
// 引入Item元件
import Item from './item'
//import Item from './item/index'

export default function List() {
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
          {books.map((book) => {
            // 將Item元件引入，並傳入book、handleToggleFav屬性
            // map裡才要加key值，使用是isbn，因為isbn是唯一值
            const { isbn, author, title, fav } = book

            return (
              <Item
                key={book.isbn}
                // book={book}
                isbn={isbn}
                author={author}
                title={title}
                fav={fav}
                handleToggleFav={handleToggleFav}
              />
            )
          })}
        </tbody>
      </table>
    </>
  )
}
