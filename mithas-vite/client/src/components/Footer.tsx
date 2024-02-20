import {TbBrandBooking} from "react-icons/tb"
import {AiOutlineInstagram, AiOutlineMail} from "react-icons/ai"
import { Flowbite, CustomFlowbiteTheme, Footer, } from 'flowbite-react';


const customFoot: CustomFlowbiteTheme = {
    footer:{
      root:{
        base: "bg-vinaccio px-16 flex flex-col items-center gap-y-4"
      },
      "groupLink": {
        "base": "flex flex-wrap text-sm text-white dark:text-white",
        "link": {
          "base": "last:mr-0 md:mr-6 me-4",
          "href": "hover:underline"
        },
        "col": "flex-col space-y-4"
      },
      "copyright": {
        "base": "text-sm text-white dark:text-gray-400 sm:text-center",
        "href": "ml-1 hover:underline",
        "span": "ml-1"
      },
    }
  }

function Component() {

    return (
        <Flowbite theme={{ theme: customFoot }}>
            <Footer container>
                <Footer.LinkGroup>
                    <Footer.Link href="#">
                        <TbBrandBooking className="bg-vinaccio rounded-2xl p-1 inline w-14 h-14 ease-in duration-200 hover:scale-125" />
                    </Footer.Link>
                    <Footer.Link href="#">
                    <AiOutlineInstagram className="bg-vinaccio rounded-2xl p-1 inline w-14 h-14 ease-in duration-200 hover:scale-125" onClick={()=>{window.open('https://www.instagram.com/mithas_rooms/')}}/>
                    </Footer.Link>
                    <Footer.Link href="#">
                        <AiOutlineMail className="bg-vinaccio rounded-2xl p-1 inline w-14 h-14 ease-in duration-200 hover:scale-125 "/>
                    </Footer.Link>
                </Footer.LinkGroup>
                <Footer.Copyright href="#" by="sasaDev™" year={2024} />
            </Footer>
        </Flowbite>     
    )
  }
  
export default Component