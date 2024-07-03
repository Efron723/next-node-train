import { useState } from 'react'

import Star from '@/components/star'
import { FaStar, FaCat } from 'react-icons/fa'

export default function StarPage() {
  const [productRating1, setProductRating1] = useState(2)
  const [productRating2, setProductRating2] = useState(3)

  return (
    <>
      <h1>星星評分元件測試頁</h1>
      <hr />
      {/* 對照組: 全部使用屬性預設值渲染 */}
      <Star />
      <hr />
      {/* 測試組 */}
      <Star
        maxCount={6}
        currentRating={productRating1}
        onRatingChange={setProductRating1}
        fillColor="#ff6600"
        emptyColor="#ccc"
        icon={<FaStar />}
      />
      <Star
        maxCount={8}
        currentRating={productRating2}
        onRatingChange={setProductRating2}
        fillColor="red"
        emptyColor="blue"
        icon={<FaCat />}
      />
    </>
  )
}
