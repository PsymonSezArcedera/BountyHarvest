import { useState, useEffect } from "react"
import * as jwt_decode from "jwt-decode"

function ProfilePage(){

    const [user, setUser] = useState({})

    useEffect(() => {
        async function loadUserData(){
            const token = sessionStorage.getItem("User")
            const decodedUser = jwt_decode.jwtDecode(token)
            setUser(decodedUser)
        }
        loadUserData()
    }, [])

    return(
        <>
            <label>Name:</label>
            <h2 className="font-semibold">{user.user?.firstName.concat(" ", user.user?.lastName)}</h2>
            <label>Email:</label>
            <h2>{user.user?.email}</h2>
            <label>Number:</label>
            <h2>{user.user?.number}</h2>
            <label>Address:</label>
            <h2>{user.user?.adress}</h2>
        </>
    )
}

export default ProfilePage
