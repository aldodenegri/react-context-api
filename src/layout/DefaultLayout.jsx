import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar.jsx'

function DefaultLayout(){
    return(
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>

            </footer>
            
        </>
    )
}export default DefaultLayout;