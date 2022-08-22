import React from 'react'
import '../styles/Carousel.css';
import Button from './carousel/Button';
import { useEffect, useState } from 'react'

export default function Carousel(props) {
    const range = props.range
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(start + range)
    const [intervalId, setIntervalId] = useState()
    const interval = props.interval * 1000

    const events = props.data

    const eventView = (event) => (
        <div className="Carousel-eventContainer">
            <img src={event.url} />
            <p>{event.title}</p>
        </div>
    )

    useEffect(() => {
        let id = setInterval(function () {
            next()
        }, interval)

        setIntervalId(id)

        return () => clearInterval(intervalId);
    }, [start])

    function previous() {
        if (start >= range) {
            setStart(start - range)
            setEnd(end - range)
        }
    }

    function next() {
        if (end < events.length) {
            setStart(start + range)
            setEnd(end + range)
        } else {
            setStart(0)
            setEnd(range)
        }
    }

    let leftArrow = <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
    </svg>
    let rightArrow = <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
    </svg>



    return (
        <div>
            <div className="slide">
                <h2>Popular MYtineraries</h2>
                <Button icon={leftArrow} click={previous} />
                {events.slice(start, end).map(eventView)}
                <Button icon={rightArrow} click={next} />
            </div>
        </div>
    )
}