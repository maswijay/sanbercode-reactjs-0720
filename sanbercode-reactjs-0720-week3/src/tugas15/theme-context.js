import { createContext} from 'react'

export const ThemeContext = createContext()

export const themes = {
    light: {
        foreground: '#2F4858',
        background: '#86BBD8'
    },
    dark: {
        foreground: '#FCFC62',
        background: '#2F4858'
    }
}

export default ThemeContext

