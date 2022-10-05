import './global.css'

import { Header } from './components/Header/Header'
import { CategorySection } from './components/CategorySection/CategorySection'
import { TopSellingSection } from './components/TopSellingSection/TopSellingSection'
import { ExampleSection } from './components/ExampleSection/ExampleSection'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Brands } from './components/Brands/Brands'
import { Subscribe } from './components/Subscribe/Subscribe'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <CategorySection />
      <TopSellingSection />
      <ExampleSection />
      <Testimonials />
      <Brands />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App
