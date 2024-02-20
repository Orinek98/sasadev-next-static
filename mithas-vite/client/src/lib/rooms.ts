
export async function getAllRooms(){
    const res = await fetch('http://localhost:3000/api/rooms',{
      cache: 'no-store',
    });
    const data = await res.json();
    return data.results;
  }

  export type dbReservation = {
    id: string,
    user: string,
    room: String,
    checkin: Date,
    checkout: Date
  }
  
  export type dbRooms = {
    id: string,
    name: string,
    slot: number
    price: number
    reservedSlot: number
  }
  
  export type option = {
    value: string | number,
    label: string
  }
  
  export type FormValues = {
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    country: string,
    room : {
      name: {
        label: string;
        value: number
      },
      slot: {
        label: string;
        value: number
      }
    }[];
  }


  export type FormRoom = {
    room: dbRooms,
    adult: number,
    child: number
  }


  export type RoomInfo = {
    name: string,
    description: string
    images: {
      url: string
      alt: string
    }[]
  }

  export const teal = {
    name: 'Teal',
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, maxime architecto! Perferendis quis, eveniet fuga, dolore rem facilis placeat consequuntur voluptatum alias recusandae repellat voluptatem temporibus corporis labore dignissimos quaerat.",
    images: [
        {url: 'http://localhost:3000/hero/h1.jpg', alt: 'Grand Room'},
        {url: 'http://localhost:3000//hero/h2.jpg', alt: 'Beo2'},
        {url: 'http://localhost:3000/hero/h3.jpg', alt: 'Beo3'},
        {url: 'http://localhost:3000/hero/h4.jpg', alt: 'Beo4'},
        {url: 'http://localhost:3000/hero/h5.jpg', alt: 'Beo5'},
    ]
  }

  export const scarlet = {
    name: 'Scarlet',
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, maxime architecto! Perferendis quis, eveniet fuga, dolore rem facilis placeat consequuntur voluptatum alias recusandae repellat voluptatem temporibus corporis labore dignissimos quaerat.",
    images: [
        {url: 'http://localhost:3000/hero/h1.jpg', alt: 'Grand Room'},
        {url: 'http://localhost:3000//hero/h2.jpg', alt: 'Beo2'},
        {url: 'http://localhost:3000/hero/h3.jpg', alt: 'Beo3'},
        {url: 'http://localhost:3000/hero/h4.jpg', alt: 'Beo4'},
        {url: 'http://localhost:3000/hero/h5.jpg', alt: 'Beo5'},
    ]
  }

  export const blue = {
    name: 'Blue',
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, maxime architecto! Perferendis quis, eveniet fuga, dolore rem facilis placeat consequuntur voluptatum alias recusandae repellat voluptatem temporibus corporis labore dignissimos quaerat.",
    images: [
        {url: 'http://localhost:3000/hero/h1.jpg', alt: 'Grand Room'},
        {url: 'http://localhost:3000//hero/h2.jpg', alt: 'Beo2'},
        {url: 'http://localhost:3000/hero/h3.jpg', alt: 'Beo3'},
        {url: 'http://localhost:3000/hero/h4.jpg', alt: 'Beo4'},
        {url: 'http://localhost:3000/hero/h5.jpg', alt: 'Beo5'},
    ]
  }