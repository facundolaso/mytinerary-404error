import '../../styles/carousel/Button.css'

export default function Button(props) {
    if (!props.icon) {
        throw new Error('A string is required for the icon property')
    }

    if (!props.click) {
        throw new Error('A function is required for the click property')
    }
    
    return (
        <button className='Carousel-button' onClick={props.click}>
            {props.icon}
        </button>
    )
}
