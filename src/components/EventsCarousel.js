import Carousel from './Carousel'

export default function EventsCarousel() {
    let events = [
        { url: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Barcelona" },
        { url: "https://images.pexels.com/photos/2303337/pexels-photo-2303337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Tokio" },
        { url: "https://images.pexels.com/photos/40142/new-york-skyline-manhattan-hudson-40142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: " Manhattan" },
        { url: "https://images.pexels.com/photos/2300342/pexels-photo-2300342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "HongKong" },
        { url: "https://images.pexels.com/photos/11051184/pexels-photo-11051184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Rio" },
        { url: "https://images.pexels.com/photos/1581693/pexels-photo-1581693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "London" },
        { url: "https://images.pexels.com/photos/8574669/pexels-photo-8574669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Miami" },
        { url: "https://images.pexels.com/photos/2676642/pexels-photo-2676642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Rome" },
        { url: "https://images.pexels.com/photos/1842332/pexels-photo-1842332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Singapore" },
        { url: "https://images.pexels.com/photos/164212/pexels-photo-164212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Venice" },
        { url: "https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Sidney" },
        { url: "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Dubai" },
    ]


return (
    <Carousel data={events} range={4} interval={5}/>
)
}
