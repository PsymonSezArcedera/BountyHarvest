import { Link, useNavigate } from "react-router-dom"
import { pageData } from "./pageData"
import logo from "../assets/logo.png"

function NavBar(){
    const navigate = useNavigate()

    function handleLogout(){
        sessionStorage.removeItem("User")
        navigate("/")
    }

    return (
        <div>
            <img src={logo} alt="logo" className="w-[150px] h-[45px] m-4"/>
            <div className="mr-20 fixed top-0 w-1/4 right-10 flex justify-between">
                {pageData.map((page) => {
                    return(
                        <>
                            <Link to={page.path} className="p-2 m-4 rounded font-semibold">
                                <button>
                                    {page.name}
                                </button>
                            </Link>
                        </>
                    )
                })}
                <button className = "rounded font-semibold"onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default NavBar