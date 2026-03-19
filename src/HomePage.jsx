import Header from './Header'
import Menu from './Menu'
import Testimonials from './Testimonials'
import About from './About'

export default function HomePage() {
    return (
        <>
            <Header />
            <section id="menu"><Menu /></section>
            <section id="testimonials"><Testimonials /></section>
            <section id="about"><About /></section>
        </>
    )
}
