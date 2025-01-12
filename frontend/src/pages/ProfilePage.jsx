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
        <div className=""> 
            <div className=" bg-gray-100 m-32 flex flex-col text-center justify-center rounded-2xl">
                <img src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png" alt="product image" className="w-64 h-64 -m-32 mb-2 object-cover rounded-lg self-center"/>
                <h2 className="text-4xl font-bold text-green-950">{user.user?.firstName.concat(" ", user.user?.lastName)}</h2>
                <h2 className="text-base font-bold bg-green-950 w-32 self-center text-yellow-500 p-2 rounded-full mt-2">buyer</h2>
                <div className="m-10">
                    <div className="flex flex-col self-center justify-center">
                        <svg class="h-8 w-8 text-green-950 self-center"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                            <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="3 9 12 15 21 9 12 3 3 9" />  
                            <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />  <line x1="3" y1="19" x2="9" y2="13" />  <line x1="15" y1="13" x2="21" y2="19" />
                        </svg>
                        <h2 className="text-lg text-green-950 font-semibold">{user.user?.email}</h2>
                    </div>
                    <div className="flex flex-col self-center justify-center">
                        <svg class="h-8 w-8 text-green-950 self-center"  width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                            <path stroke="none" d="M0 0h24v24H0z"/>  
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg>
                        <h2 className="text-lg text-green-950 font-base">{user.user?.number}</h2>
                    </div>
                    <div className="flex flex-col self-center justify-center">
                        <svg class="h-8 w-8 text-green-950 self-center"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <h2 className="text-lg text-green-950 font-semibold">{user.user?.address}</h2>
                    </div>
                
                </div>
                
            </div>
        </div>
    )
}

export default ProfilePage
