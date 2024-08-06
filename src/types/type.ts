export interface Office {
    id: number,
    price: number,
    duration: number,
    name: string,
    slug: string,
    city: City,
    address: string,
    thumbnail: string,
    photos: Photos[],
    benefits: Benefits[],
    about: string
}

interface Photos {
    id: number,
    photo: string
}

interface Benefits {
    id: number,
    name: string
}

export interface City {
    id: number,
    name: string,
    photo: string,
    slug: string
    officeSpaces_count: number,
    officeSpaces: Office[]
}

export interface BookingDetails {
    id: number,
    name: string,
    phone_number: string,
    booking_trx_id: string,
    is_paid: boolean,
    duration: number,
    total_amount: number,
    started_at: string,
    ended_at: string,
    office: Office
}