import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom';
export const Home = () => {
    const [id, setId] = useState()
    const navigate = useNavigate()

    function open_details() {
        console.log(id)
        navigate(`/userDetails/${id}`);
    }
    return (
        <>
            <h1>This is Home page</h1>
            <input onChange={(e) => setId(e.target.value)} />
            <button onClick={() => open_details()}>Open Id</button>
        </>
    )
}
