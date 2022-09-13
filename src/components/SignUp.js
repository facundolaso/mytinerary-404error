import '../styles/SignUp.css'
import { useSignUpMutation } from '../features/usersSlice'

const newUserForm = [
    {
        name: "name",
    },
    {
        name: "lastName",
    },
    {
        name: "mail",
        type: "email"
    },
    {
        name: "password",
        type: "password"
    },
    {
        name: "photo",
    },
    {
        name: "country",
    },
    {
        name: "role",
        disabled: ""
    }
]

const inputForm = (inputData) => <div class="inputContainer"><input type={inputData.type} class="input" name={inputData.name} disabled={inputData.disabled} /><label class="label">{inputData.name.toUpperCase()}</label></div>


export default function SignUp(userRole) {

    let [addUser, result] = useSignUpMutation()

    const handleAddTask = async (form) => {
        form.preventDefault()
        const newUser = 
        {
            name: form.target.name.value,
            lastName: form.target.lastName.value,
            mail: form.target.mail.value,
            password: form.target.password.value,
            photo: form.target.photo.value,
            country : form.target.country.value,
            from: "form",
            role: form.target.role.value
        };
        await addUser(newUser);
        form.target.reset()
    }

    return (
        <>
        <div class="signupFrm">
    <form action="" class="form" onSubmit={handleAddTask}>
      <h1 class="title">Sign up</h1>

      {newUserForm.map(inputForm)}

      <input type="submit" class="submitBtn" value="Sign up"/>
    </form>
  </div>
        </>
    )
}