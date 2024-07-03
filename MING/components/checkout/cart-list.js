import React from 'react'
import styles from './cart.module.css'
import { useCart } from '@/hooks/use-cart'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function CartList() {
  const { items, increaseItem, decreaseItem, removeItem } = useCart()
  // sweetalert要套用整合到react，改用MySwal來套用範例
  const MySwal = withReactContent(Swal)

  const notifyAndRemove = (productName, productId) => {
    MySwal.fire({
      title: '你確定嗎?',
      text: '你將無法回復這個操作',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: '取消',
      confirmButtonText: '確定刪除!',
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: '已刪除!',
          text: productName + '已經被刪除',
          icon: 'success',
        })

        // 作刪除的動作
        removeItem(productId)
      }
    })
  }

  return (
    <>
      <div className={styles['cart']}>
        <ul className={styles['list']}>
          {items.map((v, i) => {
            return (
              <li key={v.id} className={styles['item']}>
                <div className={styles['w-400']}>{v.name}</div>
                <div>{v.price}</div>
                <div>
                  <button
                    onClick={() => {
                      increaseItem(v.id)
                    }}
                  >
                    +
                  </button>
                  <span>{v.qty}</span>
                  <button
                    onClick={() => {
                      // 按下此按鈕處理後後，改變的下次數量
                      const nextQty = v.qty - 1

                      if (nextQty === 0) {
                        // if (confirm('你確定要移除項目?')) {
                        //   removeItem(v.id)
                        // }
                        notifyAndRemove(v.name, v.id)
                      } else {
                        decreaseItem(v.id)
                      }
                    }}
                  >
                    -
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      // if (confirm('你確定要移除項目?')) {
                      //   removeItem(v.id)
                      // }

                      notifyAndRemove(v.name, v.id)
                    }}
                  >
                    移除
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
