import React from 'react'
import * as jose from 'jose'
import { useEffect, useRef } from 'react'
import '../styles/SignUp.css'
import { useSignUpMutation } from '../features/usersSlice'
import Alerts from './Alerts'
import { useNavigate } from "react-router-dom"

export default function SignUpGoogle() {
    const buttonDiv = useRef(null)
    const navigate = useNavigate()

    let [addUser, result] = useSignUpMutation()

    async function handleCredentialResponse(response) {
        const userObject = jose.decodeJwt(response.credential)

        let googleData = {
            name: userObject.given_name,
            lastName: userObject.family_name,
            mail: userObject.email,
            password: userObject.sub,
            photo: userObject.picture,
            country : "X",
            from: "google",
            role:"user"
        }
        await addUser(googleData);
    }
    if (result.isSuccess) {
        setTimeout(myFunction, 5000)
    }
    function myFunction(){
        navigate('/signin');
        window.location.reload()
        }



    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '1009312185599-bs9omrcm0rqkbklri31qppnccrqhj273.apps.googleusercontent.com',
            callback: handleCredentialResponse,
            context: 'signup'
        });
        google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "outline", size: "large" , type:"icon", text:"signup", shape: "pill"}  // customization attributes
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
