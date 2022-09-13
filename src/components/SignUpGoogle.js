import React from 'react'
import * as jose from 'jose'
import { useEffect, useRef } from 'react'
import '../styles/SignUp.css'
import { useSignUpMutation } from '../features/usersSlice'

export default function SignUpGoogle() {
    const buttonDiv = useRef(null)

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

            </div>
        </div>
    )
}
