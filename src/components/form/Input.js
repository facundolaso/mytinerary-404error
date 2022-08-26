import React from 'react'
import '../../styles/form/Input.css'

const form = [
    {
        name: "name",
        placeholder: "Type here city name",
    },
    {
        name: "country",
        placeholder: "Type here country name",
    },
    {
        name: "url",
        placeholder: "Type here image url",
    },
    {
        name: "population",
        placeholder: "Type here population of city",
    },
    {
        name: "fundation",
        placeholder: "Type here age of fundation",
    }
]

const inputForm = (inputData) => <input class="input" name={inputData.name} placeholder={inputData.placeholder} type="text" />

export default function input() {
    return (
        <div className='new-city-container'>
            <div className='form-decoration-container'>
                <img className='form-decoration' src="../../../form_decoration.svg" alt="" />
            </div>
            <div className='form-container'>
                <div className='form-image-container'>
                    <img src="https://images.unsplash.com/photo-1584323803806-7b041fea92f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="" />
                </div>
                <div class="input-wrapper">
                    <h1>Add new city</h1>
                    <form className='input-form'>
                        {form.map(inputForm)}
                        <button type="submit" className='submit-btn'>Send</button>
                    </form>
                </div>
            </div>
            <div className='form-decoration-plane-container'>
                <img src="../../../form_decoration_plane.svg" alt="" />
            </div>
        </div>

    )
}
