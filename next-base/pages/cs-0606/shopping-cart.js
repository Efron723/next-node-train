import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  const handleIncrease = (id) => {
    const nextProducts = products.map((v, i) => {
      // 如果符合(id=傳入的id)，遞增count的數量
      if (v.id === id) return { ...v, count: v.count + 1 }
      // 否則保持原本的物件值
      else return v
    })

    setProducts(nextProducts)
  }

  const handleDecrease = (id) => {
    const nextProducts = products.map((v, i) => {
      // 如果符合(id=傳入的id)，遞減count的數量
      if (v.id === id) return { ...v, count: v.count - 1 }
      // 否則保持原本的物件值
      else return v
    })

    setProducts(nextProducts)
  }

  const handleRemove = (id) => {
    const nextProducts = products.filter((v) => {
      return v.id !== id
    })
    setProducts(nextProducts)
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncrease(product.id)
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              const nextProductCount = product.count - 1

              if (nextProductCount === 0) {
                if (confirm('確定要刪除嗎？')) {
                  handleRemove(product.id)
                }
              } else {
                handleDecrease(product.id)
              }
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  )
}
