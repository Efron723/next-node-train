import List from '@/components/context-a/list'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Page2() {
  const router = useRouter()

  return (
    <>
      <h1>Page2(Context範例-a)</h1>
      <List />
      <hr />
      <a href="/cs-0612/context-a/page1">Page1(a標記)</a>
      <br />
      <Link href="/cs-0612/context-a/page1">Page1(Link元件)</Link>
      <br />
      <button
        onClick={() => {
          alert('歡迎~')

          if (confirm('你確定?')) {
            // 連至page1
            router.push('/cs-0612/context-a/page1')
          }
        }}
      >
        連到Page1
      </button>
    </>
  )
}
