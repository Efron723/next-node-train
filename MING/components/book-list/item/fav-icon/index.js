// 因為使用import圖片的方式，所以需要引入Image元件
import Image from 'next/image'
// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

export default function FavIcon({ isbn, fav, handleToggleFav }) {
  return (
    <>
      <Image
        onClick={() => {
          handleToggleFav(isbn)
        }}
        src={fav ? bookmarkIconFill : bookmarkIcon}
        alt=""
      />
    </>
  )
}
