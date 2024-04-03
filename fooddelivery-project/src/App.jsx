
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './components/styles.css';
import Hero from './components/Hero';
import Delivery from './components/Delivery';
import Healthy from './components/Healthy';
import ProductSlider from './components/ProductSlider';
import Products from './components/Products'
import Footer from './components/Footer'



function App() {


  return (
    <>
<Navbar />
 <Hero />
 <Delivery />
 <Healthy />
 <ProductSlider />
 <Products />
 <Footer />
    </>
  )
}

export default App
