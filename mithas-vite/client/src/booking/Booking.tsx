import { useState} from 'react'
import useMultistepForm from '../lib/useMultistepForm'
import AvaibleRooms from '../components/Booking/AvaibleRooms'
import FormUser from '../components/Booking/FormUser'
import RecapRooms from '../components/Booking/RecapRooms'
import HeaderSearch from '../components/Booking/HeaderSearch'
import { FormRoom } from '../lib/rooms'
import { Progress } from 'flowbite-react'
import '../index.css'
let renderCount = 0

type FormData = {
  selectedRoom: FormRoom[],
  firstName: string,
  lastName: string,
  email: string,
  phone: string
  country: string
  roomValidate: boolean,
  formValidate: boolean
}

const INITIAL_DATA : FormData = {
  selectedRoom: [],
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  roomValidate: false,
  formValidate: false
}


function Booking() {

  const queryParameters = new URLSearchParams(window.location.search)
  const checkIn= queryParameters.get("daterange_from") as string
  const checkOut = queryParameters.get("daterange_to") as string

  console.log("t a n =",checkIn, checkOut)

    
    
    // const {dataRangeFrom} = useParams()
    // const checkOutReq = searchParams.get('daterange_to') as string

    const [data, setData] = useState(INITIAL_DATA)
    const [selected, setSelected] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    function updateFields(fields: Partial<FormData>){
        setData(prev => {
        return {...prev, ...fields}
        })
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
      <AvaibleRooms {...data} updateFields={updateFields} checkIn={checkIn} checkOut={checkOut} />,
      <FormUser {...data} updateFields={updateFields} />,
      <RecapRooms {...data} checkIn={checkIn} checkOut={checkOut} />,
    ])

    async function sendData(){

        let name = data.firstName
        let surname = data.lastName
        let email = data.email
        let phoneNumber = data.phone
        let country = data.country
        let items = ""
  
        const sendUser = await fetch('http://localhost:3000/users',{
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, surname, email, phoneNumber, country
            })
          })
          console.log("Post user ok!", name, surname, email)

          let userId = await sendUser.json()

          userId = userId.id

          console.log("userId :", userId.id)
  
        for(let i = 0; i < data.selectedRoom.length; i++){

          let room = data.selectedRoom[i].room.id
          let guestNumber = data.selectedRoom[i].adult
          let c = data.selectedRoom[i].child
          let price = 200
  
          //send Reservation
          await fetch('http://localhost:3000/orders',{
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                room, checkIn, checkOut, guestNumber, price, userId
            })
          })
          items = items + `${data.selectedRoom[i].room.name} ${guestNumber} ${c} `
          console.log("put ok!")
        }

        // send Email
        await fetch('http://localhost:3000/send', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name, surname, email, checkIn, checkOut, items
        })
        })
        
        
      }

      const handleRoom = () => {
        if(data.roomValidate){
          next()
        }
      }

      const handleForm = () => {
        if(data.formValidate){
            next()
            updateFields({formValidate: false})
        }

      }

      let index = ((currentStepIndex+1)*(3.3333)*10)
      console.log("index =",index)
      renderCount++
      console.log('render:' , renderCount, "selectedRoom length: ",data.selectedRoom.length)

    

  return (
    <main className='main-background w-screen h-screen'>
        <HeaderSearch />

        <div className='mx-auto mt-8 max-w-[45%]'><Progress color='teal' progress={index} /></div>
        <div className='mt-16 mb-12'>{step}</div>
        

        <div className='flex justify-center align-middle w-full'>
        {errorMessage && <div className="ml-2 block text-red-500"> {errorMessage} </div>}
        {isFirstStep &&
          <button className={`multistep-button ${!data.roomValidate && "cursor-not-allowed"}`} onClick={handleRoom} type="button">
            Next
            <svg className="inline w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
          
        }
        {!isFirstStep && !isLastStep &&
          <>
            <button 
            className='multistep-button' 
            onClick={back} type="button">
              <svg className="inline w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
              </svg>
              Back
          </button>
          <button className={`multistep-button ${!data.formValidate && "cursor-not-allowed"}`} onClick={handleForm} type="button">
            Next
            <svg className="inline w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
          </> 
        }
        {isLastStep &&
           <>
           <button 
           className='multistep-button' 
           onClick={back} type="button">
             <svg className="inline w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
             </svg>
             Back
         </button>
         <button className='multistep-button' onClick={sendData} type="button">
           Finish
           <svg className="inline w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
           </svg>
         </button>
         </> 

        }
        </div>

      </main>
  )
}

export default Booking