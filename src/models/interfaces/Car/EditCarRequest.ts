export interface EditCarRequest {
    car_id: string
    image: string
    plate: string
    color: string
    year: number
    name: string
    brand: string
    price_per_day: number
    available: boolean
}