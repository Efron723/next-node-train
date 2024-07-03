import React, { useState } from 'react'

export default function MyTextarea() {
  const [textareaText, setTextareaText] = useState('')

  return (
    <>
      <div title="textarea">
        <h2>文字輸入區域(textarea)</h2>
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value)
          }}
        />
      </div>
    </>
  )
}
