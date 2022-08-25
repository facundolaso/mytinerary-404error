import '../../styles/carousel/Button.css'

export default function Button(props) {
    if (!props.icon) {
        throw new Error('Se requiere un string para la propiedad icon')
    }

    if (!props.click) {
        throw new Error('Se requiere una funcion para la propiedad click')
    }
    
    return (
        <button className='Carousel-button' onClick={props.click}>
            {props.icon}
        </button>
    )
}
