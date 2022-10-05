import './global.css'

import { Header } from './components/Header/Header'
import { CategorySection } from './components/CategorySection/CategorySection'
import { TopSellingSection } from './components/TopSellingSection/TopSellingSection'
import { ExampleSection } from './components/ExampleSection/ExampleSection'
import { Testimonials } from './components/Testimonials/Testimonials'

function App() {

  return (
    <>
      <Header />
      <CategorySection />
      <TopSellingSection />
      <ExampleSection/>
      <Testimonials />
    </>
  )
}

export default App
