import { useContext } from 'react'
import { ThemeContext } from '@/context/theme'

export default function Page2() {
  //2. 在任何⼦元件層級深度，使⽤ useContext 勾⼦讀取它:
  const value = useContext(ThemeContext)

  return (
    <>
      <h1>Page2-Context範例-a</h1>
      <p>value = {JSON.stringify(value)}</p>
    </>
  )
}
