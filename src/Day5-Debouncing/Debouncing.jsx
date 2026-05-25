import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Debouncing = () => {
    const [inputValue, setInputValue] = useState("");
    const [debouncedValue, setDebouncedValue] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() =>{
            setDebouncedValue(inputValue);
        }, 1000);
        return () => clearTimeout(timer);
    }, [inputValue])

    useEffect(() =>{
        if(debouncedValue){
            const fetchData = async ()=>{
                try {
                    setLoading(true);
                    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                    const filteredData = response.data.filter(post=>
                        post.title.toLowerCase().includes(debouncedValue.toLowerCase())
                    );
                    console.log(filteredData);
                    setData(filteredData);
                } catch (err)  {
                    setError(err.message);
                } finally{
                    setLoading(false);
                }
            }
            fetchData();
        }
    },[debouncedValue])

  return (
    <>
    <div>
        <h1>Debouncing Example</h1>
        <input
           type="text"
           placeholder='Search GitHub Users'
           value={inputValue}
           onChange={(e) => setInputValue(e.target.value)}
        
        />
        <hr/>
        {loading && <p>Loading....</p>}
        {error && <p>{error}</p>}
        {data.length === 0 ? (
            <p>No results found</p>
        ) : (
            <div>
                {data.map((post) => (
                    <div key={post.id} style={{border: "1px solid black", marginBottom: "10px", padding: "10px"}}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        )}
    </div>
    </>
  )
}

export default Debouncing