# Day 1 - React Props

## Scenario
How to pass data from a parent component to a child component in React?

## Solution
Used **props** to pass dynamic data from parent to child components, making components reusable and flexible.

## Implementation
- Passed data as props from parent component
- Accessed props in child component
- Rendered dynamic content based on props

## Key Learning
Props help in creating reusable and maintainable components by enabling data flow between components.

## Code Example
```js
function Parent() {
  return <Child name="Raghavendra" />;
}

function Child(props) {
  return <h1>Hello, {props.name}</h1>;
}
