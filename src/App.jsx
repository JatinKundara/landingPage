import { Navbar, HeroSection, FeatureSection, Workflow, Pricing, Testimonials, Footer } from './components/Index'

function App() {
  return (
    <>
    <Navbar/>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
    </>
  )
} 

export default App
