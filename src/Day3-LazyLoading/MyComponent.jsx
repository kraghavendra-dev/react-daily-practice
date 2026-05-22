import React from 'react'

const MyComponent = () => {
  return (
    <div>
        <h1>Lazy Loading Component</h1>
        <p>Lazy loading is a performance optimization technique used in React applications to improve 
            initial load time by loading components only when they are required. Instead of loading 
            the entire application at once, code is split into smaller chunks and loaded dynamically 
            using React.lazy() and Suspense. When a user navigates to a specific route or component, 
            only that part of the application is fetched and rendered. This reduces the bundle size, 
            minimizes resource usage, and speeds up page loading. As a result, lazy loading enhances 
            user experience, especially in large applications with multiple pages or heavy components.</p>
    </div>
  )
}

export default MyComponent