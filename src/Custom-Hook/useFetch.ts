import axios from "axios";
import { useState, useEffect } from 'react'



function useFetch(url: string) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    const apiCall = async () => {
        try {
            const response = await axios.get(url)
            setLoading(false)
            setData(response.data.results)
        }
        catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        apiCall()
    }, [])

    return { data, loading }
}



export default useFetch


