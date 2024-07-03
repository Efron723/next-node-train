import { useState } from 'react'

const sample = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

export default function ObjectArray() {
  // 呈現(渲染)時會與使用者互動時進行改動，必需是state
  const [data, setData] = useState(sample)

  return (
    <>
      <h1>物件陣列(object array)狀態的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>

      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' }

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const nextData = [newObj, ...data]

          //3
          setData(nextData)
        }}
      >
        1. 列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' }

          //1 //2
          const nextData = [...data, newObj]

          //3
          setData(nextData)
        }}
      >
        2. 列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 1. uuid或nonaid(其它npm套件)
          //const newId = self.crypto.randomUUID()
          // 2. 時間日期物件(Date)物件轉毫秒整數值
          // `+new Date()` 或 `Date.now()`
          //const newId = Number(new Date())
          // 3. 隨機字串(hash字串)
          // const newId = (Math.random() + 1).toString(36).substring(7)
          // 4. 仿照資料表主鍵遞增id(註: 只有id為數字才可以用)
          // 提取data陣列中的id為一個新陣列
          const ids = data.map((v) => v.id)
          // 如果data陣列中無資料，則從1開始編號起
          const newId = data.length > 0 ? Math.max(...ids) + 1 : 1

          // 先寫出要新增的物件值
          const newObj = { id: newId, text: 'xxx' }
          //1 //2
          const nextData = [newObj, ...data]
          //3
          setData(nextData)
        }}
      >
        3. 列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button onClick={() => {}}>
        4. 列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          //1 2
          const nextData = data.filter((v) => {
            return v.text.includes('a')
          })

          //3
          setData(nextData)
        }}
      >
        5. 尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      <button
        onClick={() => {
          //1 2
          // 過濾後剩下除了文字為b之外的物件資料 === 刪除文字為b的物件資料
          const nextData = data.filter((v) => {
            return v.text !== 'b'
          })

          //3
          setData(nextData)
        }}
      >
        6. 刪除文字為b的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 第1種: 使用filter
          //1 2
          // 過濾後剩下除了id為4之外的物件資料 === 刪除id為4的物件資料
          // const nextData = data.filter((v) => {
          //   return v.id !== 4
          // })

          // 第2種: 使用for迴圈
          // const nextData = []
          // for (let i = 0; i < data.length; i++) {
          //   if (data[i].id !== 4) {
          //     nextData.push(data[i])
          //   }
          // }
          // setData(nextData)

          // 第3種: 使用splice(粘接)
          // 注意splice會改變原本的陣列，不能使用data狀態來呼叫，所以要先深拷貝
          // 1. 先尋找有沒有(id=4)資料的索引
          const foundIndex = data.findIndex((v) => v.id === 4)

          // 2. 判斷是否有找到
          if (foundIndex > -1) {
            // 2-1 深拷貝(或使用structuredClone)
            const nextData = JSON.parse(JSON.stringify(data))
            // 2-2 刪除 公式: array.splice(deleteIndex, 1)
            nextData.splice(foundIndex, 1)
            //3
            setData(nextData)
          }
        }}
      >
        7. 刪除id為4的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 1 2
          // 展開每個成員
          const nextData = data.map((v, i) => {
            // 如果符合(id=3)，回傳修改其中屬性text的物件
            if (v.id === 3) return { ...v, text: 'cccc' }
            // 否則保持原本的物件值
            else return v
          })

          // const nextData = data.map((v) =>
          //   v.id === 3 ? { ...v, text: 'cccc' } : v
          // )
          //3
          setData(nextData)

          // 深拷貝
          // 1. 先尋找有沒有(id=3)資料的索引
          // const foundIndex = data.findIndex((v) => v.id === 3)

          // // 2. 判斷是否有找到
          // if (foundIndex > -1) {
          //   // 2-1 深拷貝(或使用structuredClone)
          //   const nextData = JSON.parse(JSON.stringify(data))
          //   // 2-2 修改資料
          //   nextData[foundIndex].text = 'cccc'
          //   //3
          //   setData(nextData)
          // }
        }}
      >
        8. 取代id為3的文字為cccc
      </button>
      <br />
      <button
        onClick={() => {
          setData([])
        }}
      >
        9. 清空表格
      </button>
      <br />
      <button
        onClick={() => {
          // 第1種: slice(分割)
          // 1. 先尋找有沒有(id=2)資料的索引
          // const foundIndex = data.findIndex((v) => v.id === 2)
          // // 2. 判斷是否有找到
          // if (foundIndex > -1) {
          //   // 從找到的索引值產生(切出)兩個子女陣列
          //   // 公式: array.slice(startIndex, endIndex)
          //   // 注意: 不包含endIndex成員
          //   const aa = data.slice(0, foundIndex + 1)
          //   const ab = data.slice(foundIndex + 1)
          //   // 寫出要新增的物件值
          //   const newObj = { id: 5, text: 'bbb' }
          //   // 組合一個新的陣列
          //   const nextData = [...aa, newObj, ...ab]
          //   //3
          //   setData(nextData)
          // }

          // 第2種: for迴圈
          // const nextData = []

          // for (let i = 0; i < data.length; i++) {
          //   // 固定把data中的成員加到新狀態陣列中
          //   nextData.push(data[i])
          //   // 如果id=2，在它後面多加一個新物件
          //   if (data[i].id === 2) {
          //     nextData.push({ id: 5, text: 'bbb' })
          //   }
          // }

          // setData(nextData)

          // 第3種: splice
          // 1. 先尋找有沒有(id=4)資料的索引
          const foundIndex = data.findIndex((v) => v.id === 2)

          // 2. 判斷是否有找到
          if (foundIndex > -1) {
            // 2-1 深拷貝(或使用structuredClone)
            const nextData = JSON.parse(JSON.stringify(data))
            // 2-2 插入公式(到索引後面): array.splice(insertIndex+1, 0, value)
            nextData.splice(foundIndex + 1, 0, { id: 5, text: 'bbb' })
            //3
            setData(nextData)
          }
        }}
      >
        10. 在id為2後面插入id為5與文字為bbb的物件
      </button>
    </>
  )
}
