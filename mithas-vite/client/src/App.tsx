import Header from './components/Header'
import Hero from './components/Hero'
import AllRooms from './components/AllRooms'
import Footer from './components/Footer'
import SearchRooms from './components/SearchRooms'
import { ImageSlider } from './components/ImageSlider'
import { useInView } from 'react-intersection-observer'

function App() {

  const { ref, inView} = useInView()
  const { ref: roomRef, inView: roomView} = useInView()

  const heroImage = [
    {url: 'http://localhost:5173/hero/h1.jpg', alt: 'Grand Room'},
    {url: 'http://localhost:5173//hero/h2.jpg', alt: 'Beo2'},
    {url: 'http://localhost:5173/hero/h3.jpg', alt: 'Beo3'},
    {url: 'http://localhost:5173/hero/h4.jpg', alt: 'Beo4'},
    {url: 'http://localhost:5173/hero/h5.jpg', alt: 'Beo5'},
  ]

  return (
    <main className='main-background'>

      <section className='sect'>
        <Header />

        <div className='w-[96%] md:w-[96%] relative mx-auto mb-44 md:mb-8 md:mt-8 mt-2  lg:aspect-21/9 xs:aspect-square'>
          <ImageSlider images={heroImage} />
          <div className='absolute z-10 mt-4 md:mt-0 max-w-[18rem] md:max-w-[28rem] left-0 right-0 mx-auto md:bottom-2 opacity-80 hover:opacity-100 ease-linear duration-200'>
            <SearchRooms />
          </div>
        </div>
      </section>
    
      <section id="info" className='sect mt-20'>
        <Hero />
      </section>

      {/* <h1 className='text-4xl font-bold px-16 pt-8 mb-6'>The Rooms</h1> */}
      <section id="rooms" className='flex flex-col md:flex-row mt-32'>
      <h1 className='text-4xl font-bold px-16 pt-8 mb-6 self-center'>The Rooms</h1>
        <div ref={roomRef} className={`indexRoom ${roomView ? 'animateRoom' : ''}`}>
           <AllRooms />
        </div>
      </section>

      {/* <section className='sect'>
        <h1>Contact</h1>
        <Contact />
      </section> */}

      <section  ref={ref} className='sect'>
        <p>{inView ? 'yes' : 'no'}</p>
        <Footer />
      </section>

    </main>
  )
}

export default App
