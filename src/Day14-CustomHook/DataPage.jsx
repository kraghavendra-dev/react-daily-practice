import React from 'react'
import useFetch from './useFetch';

const DataPage = () => {
    const {data, loading, error} = useFetch();
  return (
    <div>
        <h1>Posts Data</h1>
        <hr/>
        {loading && <p>Loading....</p>}
        {error && <p>{error}</p>}
        { data.length > 0 && (
            <ul>
                {data.map((post) => (
                    <li key={post.id} style={{border: "1px solid black", marginBottom: "10px", padding: "10px"}}>
                        <span>{post.title}</span>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default DataPage