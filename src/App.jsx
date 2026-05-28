import React, { useContext } from 'react'
import './App.css'
import ThemeSwitcherComp from './Day13-ThemeSwitcher/ThemeSwitcherComp'
import { ThemeContext } from './Day13-ThemeSwitcher/ThemeContext';




const App = () => {
  const { theme} = useContext(ThemeContext);
  return (
    <div className={ theme === "light" ? "light-theme" : "dark-theme" }>
        <ThemeSwitcherComp/>
        <ThemeSwitcherComp/>
        <ThemeSwitcherComp/>
        <ThemeSwitcherComp/>
        <ThemeSwitcherComp/>
    </div>
  )
}

export default App
