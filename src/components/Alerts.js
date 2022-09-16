import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Alerts(result) {

    const alertSucces = (messageSucces) => {
        toast.success(messageSucces, {
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
        
    if (result.alert.isSuccess) {
        alertSucces(result.alert.data.message)
    } else if (result.alert.isError){
        alertError(result.alert.error.data.message)     
    }


    return (
        <div>
            <ToastContainer />
        </div>
    );
}