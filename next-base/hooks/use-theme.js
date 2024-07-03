import { createContext, useContext, useState } from 'react'

// 1. 建立與導出context
const ThemeContext = createContext(null)

// 2. 建立一個Context Provider(提供者)元件
// 目的: 提供給最上層元件(_app.js)方便使用，共享狀態在這裡面統一管理
// children指的是被包覆在ThemeProvider中的所有子女元件
export function ThemeProvider({ children }) {
  // 不同頁面間的共享狀態，值可以是 'light' | 'dark'，預設是'light'
  const [theme, setTheme] = useState('light')

  // 切換布景專用的(兩種值間切換的函式通常稱為toggleXXX)
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider
      // 使用value屬性提供資料給元件階層以下的所有後代元件(如果是消費者的話)
      value={{ theme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

// 3. 建立一個包裝useContext的專用名稱函式
// 目的: 讓消費者們(consumer)方便使用，呼叫useTheme就可以取得共享狀態
export const useTheme = () => useContext(ThemeContext)
