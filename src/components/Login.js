import { Button } from "@mui/material";
import React from "react";
import "./css/Login.css"

//database settings
import {provider} from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {

    const signIn = () => {
        //using google to login
        const auth = getAuth();
        
        signInWithPopup(auth, provider).then((result)=>{
            
            const user = result.user;
            console.log(user)

        }).catch((err)=>{

            alert(err.message)

        })
    }

    return(
        <div className="login">
            <div className="login__container">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/640px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png"
                    alt="whats logo"
                />
                <div className="login__text">
                    <h1>sign in</h1>
                </div>

                <Button type="submit" onClick={signIn}>
                    sign in with google
                </Button>
            </div>
        </div>
    )
}

export default Login;