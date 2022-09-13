import React from 'react'
import { useSignInMutation } from '../features/usersSlice'
import '../styles/SignIn.css'
import SignInGoogle from '../components/SignInGoogle'



const newUserForm = [
    {
        name: "mail",
    },
    {
        name: "password",
    },
]

const inputForm = (inputData) => <div key={inputData.name} className="signIn-inputContainer"><input type={inputData.type} className="signIn-input" name={inputData.name} disabled={inputData.disabled} /><label className="signIn-label">{inputData.name.toUpperCase()}</label></div>

export default function SignIn() {

    let [signIn, result] = useSignInMutation()

    const handleSignIn = async (form) => {
        form.preventDefault()
        const accesData =
        {
            mail: form.target.mail.value,
            password: form.target.password.value,
            from: "form"
        };
        await signIn(accesData);
        form.target.reset()
    }
    if (result.isSuccess) {
        console.log(result.data.response)   
    }


    return (
        <div className="signIn-container">
            <form className="signIn-form" onSubmit={handleSignIn}>
                <h1 className="signIn-title">Sign In</h1>

                {newUserForm.map(inputForm)}

                <input type="submit" className="signIn-submitBtn" value="Sign In" />
                <SignInGoogle/>
            </form>
        </div>
    )
}
