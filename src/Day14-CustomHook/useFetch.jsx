import React, { useState, useEffect } from 'react'
import axios from 'axios';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                setLoading(true);
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setData(response.data);   
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])
  return { data, loading, error };
}

export default useFetch