import React from 'react'
import * as jose from 'jose'
import { useEffect, useRef } from 'react'
import '../styles/SignIn.css'
import { useSignInMutation } from '../features/usersSlice'
import Alerts from './Alerts'
import { useNavigate } from "react-router-dom"


export default function SignInGoogle() {
    const navigate = useNavigate()

    const buttonDiv = useRef(null)


    let [signIn, result] = useSignInMutation()

    async function handleCredentialResponse(response) {
        const userObject = jose.decodeJwt(response.credential)

        let googleData = {
            mail: userObject.email,
            password: userObject.sub,
            from: "google",
        }

        await signIn(googleData);

    }
    if (result.isSuccess) {
        localStorage.setItem("loggedUser", JSON.stringify(result.data.response));
        setTimeout(myFunction, 5000)
    }

    function myFunction(){
        navigate('/');
        window.location.reload()
        }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '1009312185599-bs9omrcm0rqkbklri31qppnccrqhj273.apps.googleusercontent.com',
            callback: handleCredentialResponse,
            context: 'signin'
        });
        google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "outline", size: "large" , type:"icon", text:"signin", shape: "pill"}  // customization attributes
        );

    }, [])
    return (
        <div>
            <div className='google-btn' ref={buttonDiv}>
            <Alerts alert={result} />
            </div>
        </div>
    )
}
