import React, { lazy, Suspense} from 'react'
const LazyComponent = lazy(() => import('./Day3-LazyLoading/MyComponent'))



const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent/>
      </Suspense>
    </div>
  )
}

export default App
