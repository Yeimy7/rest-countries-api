import { useEffect, useState } from 'react'

export const useGetCountryByName = (codes='') => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`)
                if (!res.ok) {
                    let err = new Error('Error en la petición Fetch')
                    err.status = res.status || '00'
                    err.statusText = res.statusText || 'Ocurrió un error'
                    throw err;
                }
                const json = await res.json()
                if (!signal.aborted) {
                    setData(json.map(e => e.name.common))
                    setError(null)
                }
            } catch (error) {
                if (!signal.aborted) {
                    setData(null)
                    setError(error)
                }
            } finally {
                if (!signal.aborted) {
                    setLoading(false)
                }
            }
        }
        fetchData()
        return () => abortController.abort()
    }, [codes])

    return { data, error, loading }

}

