import Footer from '../components/Footer' 
import Header from '../components/Header'


function PageLayout(props) {
    return (
        <div>
            <Header/>
            { props.children }
            <Footer />
        </div>
    )
}

export default PageLayout