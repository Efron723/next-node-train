import React from 'react'

export default function Person() {
  const p1 = { name: 'John', age: 18, sex: 'male' }
  const p2 = { name: 'Efron', age: 20, sex: 'female' }
  const { name, age, sex } = { ...p1, ...p2 }
  return (
    <>
      <ul>
        <li>姓名: {name}</li>
        <li>年齡: {age}</li>
        <li>性別: {sex}</li>
        <hr />
        <li>姓名: {name}</li>
        <li>年齡: {age}</li>
        <li>性別: {sex}</li>
      </ul>
    </>
  )
}
