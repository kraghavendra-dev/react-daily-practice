# Day 13 - Theme Switcher in React

## Scenario

How to implement a dark and light theme switcher in React and apply styles dynamically across the application?

## Solution

Built a theme switcher using Context API to manage global theme state and toggle between light and dark modes.

## Implementation

* Created ThemeContext using createContext
* Managed theme state (light/dark) using useState
* Wrapped application with Context Provider
* Used useContext to access and toggle theme
* Applied conditional class names based on selected theme

## Key Learning

Theme switching helps improve user experience and demonstrates how to manage global state effectively using Context API in React.
