import { useTheme } from '@/hooks/use-theme'

export default function List() {
  const { theme } = useTheme()

  return (
    <>
      <ul className={theme}>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
      </ul>
      <style jsx>
        {`
          .light {
            background-color: white;
            color: blue;
          }

          .dark {
            background-color: black;
            color: pink;
          }
        `}
      </style>
    </>
  )
}
