import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const UserDetails = () => {
    const { id } = useParams()
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    async function getData() {
        setLoading(true)
        await fetch(`https://dummyjson.com/users/${id}`)
            .then(res => res.json())
            .then((res) => {
                setUser(res)
                setLoading(false)
            });
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <h1>Selected id is {id}</h1>

            {loading ? (<p>Loading...</p>) : <h1>User is {user?.email}</h1>}
        </>
    )
}

export default UserDetails