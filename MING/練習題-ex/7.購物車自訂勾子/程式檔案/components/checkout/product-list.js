import React from 'react'
import data from '@/data/Product.json'
import styles from './cart.module.css'

export default function ProductList() {
  return (
    <>
      <ul className={styles['list']}>
        <li className={styles['item']}>
          <div className={styles['w-400']}>XXXXXX</div>
          <div>10000</div>
          <div>
            <button onClick={() => {}}>加入購物車</button>
          </div>
        </li>
        <li className={styles['item']}>
          <div className={styles['w-400']}>XXXXXX</div>
          <div>10000</div>
          <div>
            <button onClick={() => {}}>加入購物車</button>
          </div>
        </li>
      </ul>
    </>
  )
}
