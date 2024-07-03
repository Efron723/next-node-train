import { useState, useEffect } from 'react'
// 導入.module.css檔案
import styles from './star.module.css'

export default function Star({
  maxCount = 5, // 最多可評的分數(幾個星星)
  currentRating = 0, // 初始的評分(一開始點亮幾個星星)，完全綁定到父母元件的某個狀態
  onRatingChange = () => {}, // 點按回傳評分的函式
  fillColor = 'gold',
  emptyColor = 'gray',
  icon = <>&#9733;</>,
}) {
  // 記錄點按時的評分，一開始是0分代表沒有評分
  const [rating, setRating] = useState(0)
  // hover評分
  const [hoverRating, setHoverRating] = useState(0)

  // 解決以props(屬性)作為state(狀態)的初始化值反樣式
  // https://github.com/orgs/mfee-react/discussions/128
  useEffect(() => {
    setRating(currentRating)
  }, [currentRating])
  // ^^^^^^^^^^^^^^ 監聽currentRating的變動，同步化目前自己元件的對應狀態

  return (
    <>
      <div>
        {Array(maxCount)
          .fill(1)
          .map((v, i) => {
            // 每個星星圖示按鈕的分數，相當於索引+1
            const score = i + 1

            return (
              <button
                // 從初次渲染到應用程式執行過程中，都不會有新增、刪除、修改、排序…的情況
                // 才能使用index(索引)當key
                key={i}
                className={styles['star-btn']}
                onClick={() => {
                  // 點按後設定分數
                  setRating(score)
                  // 設定分數回傳回父母元件
                  onRatingChange(score)
                }}
                onMouseEnter={() => {
                  setHoverRating(score)
                }}
                onMouseLeave={() => {
                  setHoverRating(0)
                }}
              >
                <span
                  // 用style屬性代入顏色屬性變數
                  style={{
                    '--fill-color': fillColor,
                    '--empty-color': emptyColor,
                  }}
                  // 判斷星星是否要點亮。如果這個星星的分數(score)小於等於目前的選中的評分(rating)狀態，則套用亮起樣式
                  className={
                    score <= rating || score <= hoverRating
                      ? styles['on']
                      : styles['off']
                  }
                >
                  {icon}
                </span>
              </button>
            )
          })}
      </div>
      <style jsx>
        {`
          .on {
            color: ${fillColor};
          }

          .off {
            color: ${emptyColor};
          }
        `}
      </style>
    </>
  )
}
