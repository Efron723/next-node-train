import Link from 'next/link'
import CheckoutLayout from '@/components/checkout/layout'
import ProductList from '@/components/checkout/product-list'

export default function Products() {
  return (
    <>
      <h1>商品列表</h1>
      <hr />
      <p>
        <Link href="/cs-0612/checkout/cart">連至購物車</Link>
      </p>
      <ProductList />
    </>
  )
}

// 自訂版面的套用語法，可以讓每個頁面套用自己的排版(layout)
// https://github.com/mfee-react/project-guide/blob/main/project-docs/3.howto-layout.md
Products.getLayout = function getLayout(page) {
  return <CheckoutLayout>{page}</CheckoutLayout>
}
