import React, { useEffect } from 'react';
import {  signOut } from "firebase/auth";
import {auth} from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
 
const Logout = () => {
    const navigate = useNavigate();
 console.log(auth)
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
   

    return(
        <>
            <nav>
                <p>
                    Welcome Home
                </p>
 
                <div>
        			<button onClick={handleLogout}>
                        Logout
                    </button>
        		</div>
            </nav>
        </>
    )
}
 
export default Logout;