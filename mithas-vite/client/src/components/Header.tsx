import { Flowbite, CustomFlowbiteTheme, Navbar, } from 'flowbite-react';
import {Link} from 'react-scroll'

const customNav: CustomFlowbiteTheme = {
  navbar:{
    root:{
      base: "bg-vinaccio px-16"
    },
    collapse:{
      list: "mt-4 flex flex-col items-center bg-vinaccio-200 md:bg-vinaccio rounded-md md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium"
    },
    link:{
      active: {
        on: "text-white text-xl hover:text-gray-200",
        off: "text-blue-200 text-xl hover:text-gray-200"
      }
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-white hover:bg-vinaccio-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
      icon: "h-6 w-6 shrink-0"
    }
  }
}

function Header() {

  return (
    <Flowbite theme={{ theme: customNav }}>
      <Navbar fluid>
      <Navbar.Brand href="./">
      <img src="/logo.jpg" className='ml-8' width={150} height={100} alt="logo"/>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>

        <Navbar.Link active>
          <Link activeClass="active" to="info" spy={true} smooth={true} offset={-79} duration={800}>
            <h1 className='text-white text-xl hover:text-gray-200 cursor-pointer'>
              Info
            </h1>
          </Link>
        </Navbar.Link>

        <Navbar.Link active>
          <Link activeClass="active" to="rooms" spy={true} smooth={true} offset={-30} duration={800}>
            <h1 className='text-white text-xl hover:text-gray-200 cursor-pointer'>
              Rooms
            </h1>
          </Link>
        </Navbar.Link>

        <Navbar.Link active href="./contact">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </Flowbite>
        
  )
}

export default Header