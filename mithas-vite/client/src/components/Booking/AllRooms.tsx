
export default function AllRooms() {
  return (
    <section className='grid gap-y-4 py-6'>
        <div className='flex flex-wrap justify-center gap-y-4 gap-x-4'>
            <div className="group relative w-[25%] hover:bottom-0 hover:h-full ">
                <img src="/hero/scarletHero.jpg" alt="Avatar" className="block w-full h-auto" />
                <div className="absolute bottom-full left-0 right-0 bg-blue-200 opacity-50 overflow-hidden ease-linear duration-500 w-full h-0 group-hover:bottom-0 group-hover:h-full">
                    <div className="whitespace-nowrap text-md absolute overflow-hidden top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Hello World</div>
                    <button className="whitespace-nowrap text-md absolute overflow-hidden top-[80%] left-1/2 -translate-x-2/4 -translate-y-2/4">Pippo</button> 
                </div>
            </div>

            <div className="group relative w-[25%] hover:bottom-0 hover:h-full ">
                <img src="/hero/emeraldHero.jpg" alt="Avatar" className="block w-full h-auto" />
                <div className="absolute bottom-full left-0 right-0 bg-blue-200 opacity-50 overflow-hidden ease-out duration-500 w-full h-0 group-hover:bottom-0 group-hover:h-full">
                    <div className="whitespace-nowrap text-md absolute overflow-hidden top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Hello World</div>
                    <button className="whitespace-nowrap text-md absolute overflow-hidden top-[80%] left-1/2 -translate-x-2/4 -translate-y-2/4">Pippo</button> 
                </div>
            </div>

            <div className="group relative w-[25%] hover:bottom-0 hover:h-full ">
                <img src="/hero/matrimonialeHero.jpg" alt="Avatar" className="block w-full h-auto" />
                <div className="absolute bottom-full left-0 right-0 bg-blue-200 opacity-50 overflow-hidden ease-in duration-500 w-full h-0 group-hover:bottom-0 group-hover:h-full">
                    <div className="whitespace-nowrap text-md absolute overflow-hidden top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Hello World</div>
                    <button className="whitespace-nowrap text-md absolute overflow-hidden top-[80%] left-1/2 -translate-x-2/4 -translate-y-2/4">Pippo</button> 
                </div>
            </div>
        </div>
        <div className='grid justify-center'>
            <article className="cardxl">
                    <img
                        className="cardxl__background"
                        src="/rooms/bella.jpg"
                        alt="Teal 2"
                        width="1920"
                        height="2193"
                    />
                    <div className="cardxl__content | flowxl">
                        <div className="cardxl__content--container | flowxl">
                            <h2 className="cardxl__title text-2xl">Comm Rooms</h2>
                            <p className="cardxl__description">
                                This is Mitha’s most luxurious room, characterized by its wonderful double bed...
                            </p>
                        </div>
                        <button className="cardxl__button">Read more</button>
                    </div>
            </article>
        </div>
    </section>
  )
}