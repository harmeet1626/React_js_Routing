import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { About } from "../pages/About"
import UserDetails from '../pages/userDetails'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/userDetails/:id" element={<UserDetails />} />
            </Routes>
        </>
    )
}

export default Routers