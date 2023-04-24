export interface Product {
    id: number
    name: string
    description: string
    imageURL: string
    rating: number
    available: boolean
    releaseDate: number
    price: Price
    longDescription: string
  }
  export interface Price {
    value: number
    currency: string
  }