import React from 'react'
import styles from './cart.module.css'

export default function CartList() {
  return (
    <>
      <ul className={styles['list']}>
        <li className={styles['item']}>
          <div className={styles['w-400']}>YYY</div>
          <div>10000</div>
          <div>
            <button onClick={() => {}}>+</button>
            <span>1</span>
            <button onClick={() => {}}>-</button>
          </div>
          <div>
            <button onClick={() => {}}>移除</button>
          </div>
        </li>
        <li className={styles['item']}>
          <div className={styles['w-400']}>YYY</div>
          <div>10000</div>
          <div>
            <button onClick={() => {}}>+</button>
            <span>1</span>
            <button onClick={() => {}}>-</button>
          </div>
          <div>
            <button onClick={() => {}}>移除</button>
          </div>
        </li>
      </ul>
    </>
  )
}
