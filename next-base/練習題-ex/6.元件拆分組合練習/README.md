# 說明

1. 將之前的"加入收藏"元件，拆分為 List, Item, FavIcon 三個元件，再組合後，和原本之前功能是一樣的。

2. 將之前的"星星圖示評分"元件，讓它可以從父母元件傳入 props(屬性)，可以呈現一開始的評分與星星點亮圖，例如傳入 3 分，呈現三個星星點亮圖。另外按下 `onClick` 後，可以回傳使用者點按的評分回父母元件。

3. 增加一個屬性，可以在父母元件設定每個星星元件的星星顏色，fillColor代表選中或滑鼠游標懸停顏色，emptyColor是沒選中的顏色，例如:

```js
<Star fillColor="#ff6600" emptyColor="#ccc" />
```

> 註: 此練習可以分別使用 CSS Modules, inline style(內聯樣式) 與 styled-jsx 三種樣式套用法

4. 傳入不同圖示(例如愛心)，可以改變原本的星星的圖示。(註: 可使用 [react-icons](https://github.com/react-icons/react-icons) 套件)
