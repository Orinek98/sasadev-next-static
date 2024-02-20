import {useState} from 'react'
// import {format} from "date-fns"
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import '../style/dataRangePicker.css'
import '../style/calendar.css'

let arrow = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mt-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>


type ValuePiece = Date | any

type Value = ValuePiece | [ValuePiece, ValuePiece];



export default function SearchRooms() {
    
  const [date, setDate] = useState<Value>([new Date(), new Date()])

    console.log(date)

  return (
    <form action={"/booking"} method='GET' className='flex gap-x-0 md:gap-x-3 bg-white p-3 border border-smeraldo/25 rounded-lg justify-center items-center shadow-md'>
      <div className='flex gap-x-4 gap-y-2 flex-col md:flex-row'>
        <div className='rounded-lg py-1 hover:border'>
            <div className='flex md:gap-x-14 gap-x-16 rounded-lg'>
              <h1 className='md:text-xl text-lg text-black select-none pl-5'>Check-in</h1>
              <h1 className='md:text-xl text-lg text-black select-none pr-4'>Check-out</h1>
            </div>
            <div className=''>
              <DateRangePicker onChange={setDate} value={date} minDate={new Date()} format="dd/MM/y" rangeDivider={arrow} clearIcon={null} calendarIcon={null}/>
            </div>
        </div>
            <button type='submit' className='bg-smeraldo/80 text-white text-lg md:text-xl rounded-2xl px-2 py-1 md:px-4 md:py-2 hover:bg-smeraldo trasition ease-in duration-200 z-10'>Check availability</button>
      </div>

    </form>
  )
}


//.getTime()+(86400000)