import React from 'react'
// 導入.module.css檔案
import styles from '@/styles/star.module.css'

export default function Star() {
  return (
    <>
      <h1>星星評分範例</h1>
      <div>
        <span className={styles['good-style']}>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
      </div>
    </>
  )
}
