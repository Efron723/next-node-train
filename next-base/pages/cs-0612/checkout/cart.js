import Link from 'next/link'
import CartList from '@/components/checkout/cart-list'
import { useCart } from '@/hooks/use-cart'
import CheckoutLayout from '@/components/checkout/layout'

export default function Cart() {
  const { totalPrice, totalQty } = useCart()

  return (
    <>
      <h1>購物車</h1>
      <hr />
      <p>
        <Link href="/cs-0612/checkout/products">連至商品頁</Link>
      </p>
      <CartList />
      <hr />
      <div>
        總數量: {totalQty} / 總金額: {totalPrice}
      </div>
    </>
  )
}

// 自訂版面的套用語法，可以讓每個頁面套用自己的排版(layout)
// https://github.com/mfee-react/project-guide/blob/main/project-docs/3.howto-layout.md
Cart.getLayout = function getLayout(page) {
  return <CheckoutLayout>{page}</CheckoutLayout>
}
