import React from 'react'
import '../../styles/form/Input.css'
import { useAddCityMutation } from '../../features/dataAPI'

const form = [
    {
        name: "city",
        placeholder: "Type here city name",
    },
    {
        name: "country",
        placeholder: "Type here country name",
    },
    {
        name: "photo",
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

const inputForm = (inputData) => <input className="input" name={inputData.name} placeholder={inputData.placeholder} type="text" key={inputData.name} required />

export default function Input() {

    let [addTask, result] = useAddCityMutation()

    const handleAddTask = async (form) => {
        form.preventDefault()
        const newcity = {
            city: form.target.city.value,
            country: form.target.country.value,
            photo: form.target.photo.value,
            population: form.target.population.value,
            fundation: form.target.fundation.value
        };
        await addTask(newcity);
        form.target.reset()
    }

    if (result.isSuccess) {
        alert('City created successfully!!')
    } else if (result.isError){
        alert('City not created')
    }

    return (
            <div className='new-city-container'>
                <div className='form-decoration-container'>
                    <img className='form-decoration' src="../../../form_decoration.svg" alt="" />
                </div>
                <div className='form-container'>
                    <div className='form-image-container'>
                        <img src="https://images.unsplash.com/photo-1584323803806-7b041fea92f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="" />
                    </div>
                    <div className="input-wrapper">
                        <h1>Add new city</h1>
                        <form className='input-form' action="/cities" method="Post" target="_blank" onSubmit={handleAddTask} >
                            {form.map(inputForm)}
                            <input type="submit" className='submit-btn' value='Send'></input>
                        </form>
                    </div>
                </div>
                <div className='form-decoration-plane-container'>
                    <img src="../../../form_decoration_plane.svg" alt="" />
                </div>
            </div>
    )
}

