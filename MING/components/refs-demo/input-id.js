export default function InputId() {
  return (
    <>
      <h2>input使用id(不可控)</h2>
      <input type="text" id="myInput" />
      <button
        onClick={() => {
          alert(document.getElementById('myInput').value)
        }}
      >
        獲得值
      </button>
    </>
  )
}
