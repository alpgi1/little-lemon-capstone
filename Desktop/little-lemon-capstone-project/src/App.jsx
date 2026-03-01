import './App.css'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import Testimonials from './Testimonials'
import Menu from './Menu'
import About from './About'

function App() {

  return (
    <>
    <Nav/>
    <Header/>
    <section id="menu"><Menu /></section>
    <section id="testimonials"><Testimonials /></section>
    <section id="about"><About /></section>
    <Footer/>
    </>
  )
}

export default App
