import React from 'react'
import Child from './child'

export default function Parent() {
  return (
    <>
      <h2>Parent</h2>
      {/* 誰render誰(父母元件render子女元件) */}
      {/* 父母元件可以用類似HTML給定屬性方式，傳遞各種類型的值給子女元件 */}
      <hr />
      <Child
        string="123"
        number={123}
        boolean={false}
        array={[1, 2, 3]}
        object={{ a: 1, b: 2 }}
        functions={(x, y) => x + y}
      />
    </>
  )
}
