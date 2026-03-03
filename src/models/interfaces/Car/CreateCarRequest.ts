export interface CreateCarRequest {
    image: string
    plate: string
    color: string
    year: number
    name: string
    brand: string
    price_per_day: number
    available: boolean
    user_id: string
}