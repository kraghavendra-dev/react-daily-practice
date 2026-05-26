# Day 11 - Controlled & Uncontrolled Components

## Scenario
Create a Controlled and Uncontrolled Component in React.

## Solution
Implemented both **Controlled** and **Uncontrolled Components** to understand how React and the DOM handle form data.

## Implementation

### Controlled Component
- Managed input values using **useState**
- React controls the form data
- Updates happen on every change using `onChange`

### Uncontrolled Component
- Used **useRef** to access DOM elements directly
- Form data is handled by the DOM itself
- Values are accessed only when needed (e.g., on submit)

- ## Key Learning
- Controlled components give full control over form data and validation  
- Uncontrolled components are useful for simple and quick form handling  
- Knowing both approaches helps choose the right method based on use case  
