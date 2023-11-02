import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const About = () => {
    const navigate = useNavigate()
    const [data, setData] = useState("Context data")
    
    function moveBy() {
        navigate("/")
    }
    return (
        <>
            <h1>This is about page</h1>
            <button onClick={() => moveBy()}>Home</button>
        </>
    )
}