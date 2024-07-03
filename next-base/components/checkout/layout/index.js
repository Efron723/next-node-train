import Navbar from './navbar'
import styles from '@/components/checkout/cart.module.css'

// 自訂版面的建立語法，可以讓每個頁面套用自己的排版(layout)
// https://github.com/mfee-react/project-guide/blob/main/project-docs/3.howto-layout.md
export default function CheckoutLayout({ children }) {
  return (
    <>
      <div className={styles['container']}>
        <Navbar />
        {children}
      </div>
    </>
  )
}
