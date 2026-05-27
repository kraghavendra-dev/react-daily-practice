# Day 5 - Debouncing

## Scenario
How to optimize performance in a React application by limiting unnecessary API calls or function executions during rapid user input?

## Solution
Implemented **debouncing** to delay the execution of a function until the user stops typing for a specified time.

## Implementation
- Used `setTimeout` to delay function execution  
- Cleared previous timeout using `clearTimeout`  
- Applied debouncing on input field (search use case)  
- Prevented multiple API calls on every keystroke  

## 🎯 Key Learning
- Debouncing improves performance by reducing unnecessary function calls  
- Useful in search inputs and API calls  
- Helps control execution frequency based on user interaction  
