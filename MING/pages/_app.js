// 去除掉預設的樣式
//import '@/styles/globals.css'
// 全域樣式只能在這裡套用
// import '@/styles/product-table.css'
import { ThemeProvider } from '@/hooks/use-theme'
import { CartProvider } from '@/hooks/use-cart'

export default function MyApp({ Component, pageProps }) {
  // 使用自訂在頁面層級的版面(layout)
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <CartProvider>
      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </CartProvider>
  )
}
