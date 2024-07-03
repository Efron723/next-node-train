// 1. 建立與導出context
import { createContext } from 'react'

// createContext()可以傳入defaultValue參數，這是當沒有對應的Provider時，預設的值
// defaultValue可以使用有意義的預設值，或使用null(用於除錯)
// 參考: https://react.dev/reference/react/createContext#parameters
export const ThemeContext = createContext(null)
