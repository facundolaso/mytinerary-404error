import React from 'react'
import '../styles/form/Input.css'
import { useAddItineraryMutation } from '../features/itineraiesSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const form = [
    {
        name: "name",
        placeholder: "Type here itinerary name",
    },
    {
        name: "price",
        placeholder: "Type here the price of the itinerary",
    },
    {
        name: "tags",
        placeholder: "Type here your tags",
    },
    {
        name: "duration",
        placeholder: "Type here the duration in minutes",
    },
]

const inputForm = (inputData) => <input className="input" name={inputData.name} placeholder={inputData.placeholder} type="text" key={inputData.name} required />
export default function NewItinerary() {

    const alertSucces = () => {
        toast.success('Itinerary created, please reload the page!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });    
    }
    const alertError = (message) => {
            toast.error(message , {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
    }


        

    let [addItinerary, result] = useAddItineraryMutation()
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
    let id
    let queryString = window.location.search
    let params = new URLSearchParams(queryString)
    id = params.get("id")
    
    const handleAddTask = async (form) => {
        let tag = form.target.tags.value.replace(/,/g, "").replace(/;/g, "")
        tag = tag.trim().split( /\s* \s*/)
        form.preventDefault()
        const newItinerary = {
            name: form.target.name.value,
            user: loggedUser.user.id,
            city: id,
            price: form.target.price.value,
            likes: [0],
            tags: tag,
            duration: form.target.duration.value,
        };
        await addItinerary(newItinerary);
        form.target.reset();
        
        
    }
    
    if (result.isSuccess) {
        alertSucces()
    } else if (result.isError){
        alertError(result.error.data.message)
        result.isError = false
        
    }

    return (
            <div className='new-city-container'>
                <div className='form-decoration-container'>
                    <img className='form-decoration' src="../../../form_decoration.svg" alt="" />
                </div>
                <div className='form-container'>
                    <div className='form-image-container'>
                        <img src="https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className="input-wrapper">
                        <h1>Add new itinerary</h1>
                        <form className='input-form' action="/cities" method="Post" target="_blank" onSubmit={handleAddTask} >
                            {form.map(inputForm)}
                            <input type="submit" className='submit-btn' value='Send' ></input>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
                <div className='form-decoration-plane-container'>
                    <img src="../../../form_decoration_plane.svg" alt="" />
                </div>
            </div>
    )
}
