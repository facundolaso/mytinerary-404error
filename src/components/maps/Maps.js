import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import '../../styles/maps/Maps.css'
import { useGetAllCitiesQuery } from '../../features/dataAPI'
import { Link as LinkRouter } from 'react-router-dom'
import { useEffect } from 'react'
import ResetViewControl from '@20tab/react-leaflet-resetview';

export default function Maps() {
    let { data: cities, refetch } = useGetAllCitiesQuery()

    const mapView = city => (
        <Marker alt={city.city} position={[city.latitude, city.longitude]}>
            <Popup keepInView={true} closeButton={false}>
                <div className='popup'>
                    {city.city}

                    <img className='' src={city.photo} alt="" />
                    <LinkRouter to={`/details?id=${city._id}`}>Go to city detail</LinkRouter>
                </div>
            </Popup>
        </Marker>
    )


    useEffect(() => {
        refetch()
    }, [])

    return (
        <div id="map">
            <MapContainer className='maps' center={[0, 0]} zoom={1.5} scrollWheelZoom={true} worldCopyJump={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {cities?.response.map(mapView)}
                <ResetViewControl
                    title="Reset view"
                    icon='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                    <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                </svg>'
                />

            </MapContainer>
        </div>
    )
}
