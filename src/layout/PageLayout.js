import Footer from '../components/Footer' 

function PageLayout(props) {
    return (
        <div>
            { props.children }
            <Footer />
        </div>
    )
}

export default PageLayout