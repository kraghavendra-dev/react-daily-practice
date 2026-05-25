import React, { useState, useEffect } from 'react'
import axios from 'axios';

const DataFetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const fetchData = async () =>{
            try {
                setLoading(true);
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setData(response.data);
            } catch (err)  {
                setError(err.message);
            } finally{
                setLoading(false);
            }
        }
        fetchData();
    },[])
  return (
    <div>
        <h1>Data Fetcher Component</h1>
        <hr/>
        {loading && <h3>Loading...</h3>}
        {error && <h3>{error}</h3>}
        {
            data.map((post) => (
                <div key={post.id} style={{border: "1px solid black", marginBottom: "10px", padding: "10px"}}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))
        }
    </div>
  )
}

export default DataFetcher