import { useState, useEffect } from 'react'

export const useRequest = (fetch) => {
    const [data, setData] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchdata = async () => {
            try{
                const data = await fetch()
                setData(data.data)
                setLoaded(true)
            } catch (e) {
                setError(e.message)
            }
        }
        fetchdata()
    }, [fetch])


    return { data, loaded, error }
}