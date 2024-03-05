"use client"
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail} from'react-icons/ai'
import {Link} from 'react-scroll'
import { NewImageSlider } from './components/NewImageSlider';

import { useState } from 'react';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const heroImage = [
      {url: 'http://www.sasadev.it/pictures/etna.webp', alt: 'Beo1'},
      {url: 'http://www.sasadev.it/pictures/guate1.webp', alt: 'Beo2'},
      {url: 'http://www.sasadev.it/pictures/guate2.webp', alt: 'Beo3'},
    ]
  
    return (
      <div id='#' className={darkMode ? 'dark' : ''}>
        <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
          <section className="min-h-screen">
            <nav className='py-10 mb-4 flex justify-between items-center'>
              <ul className='flex items-center'>
                <li>
                  <h1 className='text-2xl font-burtons pt-1 dark:text-gray-200'>sasaDev</h1>
                </li>
              </ul>
                  <BsFillMoonStarsFill className='cursor-pointer text-2xl mr-2 pt-1 dark:text-gray-200' onClick={()=>setDarkMode(!darkMode)}/>
              </nav>
            <div className='text-center p-10 xxs:p-6'>
              <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
                Saverio Santonocito
              </h2>
              <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-200'>
                Front-End Developer
              </h3>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-100'>
              <AiOutlineInstagram className="ease-in duration-200 hover:scale-125 hover:cursor-pointer" onClick={()=>{window.open('https://www.instagram.com/santorinek/')}} />
              <AiOutlineLinkedin className="ease-in duration-200 hover:scale-125 hover:cursor-pointer" onClick={()=>{window.open('https://www.linkedin.com/in/saverio-santonocito-291170253/')}}/>
              <AiOutlineMail className='ease-in duration-200 hover:scale-125 hover:cursor-pointer' onClick={()=>{window.location = 'mailto:saveriosantonocito@outlook.com'}}/>
            </div>
            <div className='relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
              <img alt="me" src="http://www.sasadev.it/img/24.webp" className='object-cover absolute -top-[17%]'/>
            </div>
          </section>
          
          <section>
            <div>
              <h3 className='text-3xl py-1 pt-5 max-w-xl mx-auto xxs:pt-12 dark:text-gray-200'>
                About Me
              </h3>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200'>
              Hi, I&apos;m a web developer based in Catania(Italy). I studied computer science at the University of Catania, which gave me the basis to independently study web development. At the moment I am a beginner in the sector but I really want to learn and get involved. I&apos;m specialized in the front-end, but I have good knowledge of the back-end as well.
              </p>
            </div>
            <h3 className='text-3xl pt-10 pb-6 dark:text-gray-200'>
                  Technology that i use
                </h3>
            <div className='lg:flex justify-center gap-10 '>
              <div className='flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200 dark:shadow-gray-500 dark:shadow-lg'>
                <h4 className='text-2xl pb-6'>Front-end</h4>
                <div>
                  <img alt='react' src="http://www.sasadev.it/img/react.png" width={60} height={60} className='inline m-3' />
                  <img alt='react' src="http://www.sasadev.it/img/Next.js.png" width={80} height={80} className='inline m-3' />

                  <img alt='tailwind' src="http://www.sasadev.it/img/tailwind.png" width={60} height={60} className='inline m-3' />
                  
                </div>
              </div>
              <div className='flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200 dark:shadow-gray-500 dark:shadow-lg'>
              <h4 className='text-2xl pb-6'>Back-end</h4>
                <img alt='node' src="http://www.sasadev.it/img/node.png" width={60} height={60} className='inline m-3'/>
                <img alt='express' src="http://www.sasadev.it/img/express.png" width={60} height={60} className='inline m-3' />
                <img alt='react' src="http://www.sasadev.it/img/next.js.png" width={80} height={80} className='inline m-3' />
  
              </div>
              <div className='flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200 dark:shadow-gray-500 dark:shadow-lg'>
                <h4 className='text-2xl pb-6'>Others</h4>
                <img alt='npm'src="http://www.sasadev.it/img/npm.png" width={60} height={60} className='inline m-3' />
                <img alt='git'src="http://www.sasadev.it/img/git.png" width={60} height={60} className='inline m-3' />
                <img alt='mongo' src="http://www.sasadev.it/img/mongodb.png" width={60} height={60} className='inline m-3' />
                <img alt='mongo' src="http://www.sasadev.it/img/mysql.png" width={60} height={60} className='inline m-3' />
              </div>
            </div>
          </section>

          <section>
            <div>
              <h3 className='lg:pt-12 text-3xl py-1 xxs:pt-12 dark:text-gray-200 '>
                Portfolio
                </h3>
                <p className='text-lg py-2 leading-8 text-gray-800 dark:text-gray-200'>
                Some of the projects I&apos;ve worked on. I know there are few but more will come soon.
              </p>
            </div>
            <div className='flex flex-col gap-10 py-7 lg:flex-row lg:flex-warp'>
              <div className='basis-1/3 flex-1'>
                <div className='relative w-2/4 shadow-lg'>
                  <img  alt='onepiece' src="http://www.sasadev.it/img/one-piece-store.png" className='opacity-100 block w-full h-auto backface-hidden transition duration-500 ease-in dark:shadow-gray-500 dark:shadow-lg'/>
                  <div className='transition duration-500 -translate-x-2/4 -translate-y-2/4 opacity-0 absolute top-2/4 left-2/4  hover:opacity-100'>
                    <button className='bg-teal-500 text-white px-4 py-2 rounded-md mr-8 mt-2' onClick={() => window.open('https://github.com/Orinek98/onepiece-e-commerce')}>View Code</button>
                    <button className='bg-teal-500 text-white px-4 py-2 rounded-md mt-2' onClick={() => window.open('https://orinek98.github.io/onepiece-e-commerce/')}>Live Preview</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section>
            <div className='lg:pt-12 xxs:mb-10'>
              <h3 className='text-3xl py-1 xxs:pt-12 dark:text-gray-200'>My photo</h3>
              <p className='text-lg py-2 leading-8 text-gray-800 dark:text-gray-200 mb-5'>
              I am also a great lover of photography. A passion that I inherited from my father. I shoot mostly with my Fuji xt4, but as a lover of black and white I also shoot analog with an old Yashica.
              </p>
            </div>
            <div className='max-w-[80%] mx-auto'>
              <NewImageSlider images={heroImage}/>

            </div>
            <div className='w-full h-6 xxs:h-12 dark:bg-gray-900'></div>
          </section>
        
        </main>

        <footer className='flex flex-col items-center bg-gradient-to-t from-teal-600 to-teal-400 opacity-80 dark:bg-gradient-to-t dark:from-teal-800 dark:to-teal-600'>
              <div className='text-3xl flex justify-center gap-16 py-3 text-gray-700 dark:text-gray-200'>
                <AiOutlineInstagram className="hover:text-gray-900 hover:cursor-pointer" onClick={()=>{window.open('https://www.instagram.com/santorinek/')}} />
                <AiOutlineLinkedin className="hover:text-gray-900 hover:cursor-pointer" onClick={()=>{window.open('https://www.linkedin.com/in/saverio-santonocito-291170253/')}}/>
                <AiOutlineMail className='hover:text-gray-900 hover:cursor-pointer' onClick={()=>{window.location = 'mailto:saveriosantonocito@outlook.com'}}/>
              </div>
              <Link activeClass="active" to="#" spy={true} smooth={true} offset={0} duration={500}><h1 className='text-lg font-burtons pt-1 hover:cursor-alias dark:text-gray-200'>sasaDev</h1></Link>
          </footer>
      </div>
    )
  }

export default App;