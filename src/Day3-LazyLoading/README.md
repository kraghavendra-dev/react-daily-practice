# Day 3 - Lazy Loading in React

## Scenario
How to improve application performance by loading components only when they are needed?

## Solution
Implemented lazy loading using **React.lazy() and Suspense** to dynamically load components.

## Implementation
- Used **React.lazy()** for dynamic import of components  
- Wrapped components with **Suspense**  
- Added fallback UI (loading indicator) while component loads  
- Applied lazy loading with React Router for route-based code splitting  

## Key Learning
Lazy loading improves performance by reducing initial bundle size and loading components only when required.
