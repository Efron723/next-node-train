import SwitchButton from '@/components/context-a/switch-button'
import List from '@/components/context-a/list'
import Link from 'next/link'

export default function Page1() {
  return (
    <>
      <h1>Page1 (Context範例-a)</h1>
      <SwitchButton />
      <hr />
      <List />
      <hr />
      <a href="/cs-0612/context-a/page2">Page2(a標記)</a>
      <br />
      <Link href="/cs-0612/context-a/page2">Page2(Link元件)</Link>
    </>
  )
}
