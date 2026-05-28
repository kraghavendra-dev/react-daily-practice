import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

const ThemeSwitcherComp = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
        <h1>Theme Switcher Component</h1>
        <hr/>
        <button onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"}
        </button>
    </div>
  )
}

export default ThemeSwitcherComp