export interface CartType {
  loading: boolean
  items: Item[]
}

interface ProductInfo {
  sku: number
  name: string
  image: string
  amount: number
  seller: string
}

interface Price {
  price: string
  subtotal: string
}

interface Delivery {
  name: string
  freight: string
}

interface Hint {
  description: string
}

interface Service {
  name: string
  price: string
  enable: boolean
  hint?: Hint
}

interface Item {
  productInfo: ProductInfo
  price: Price
  delivery: Delivery
  services: Service[]
}
