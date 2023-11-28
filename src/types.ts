export interface Billboard {
  id: string
  label: string
  imageUrl: string
}

export interface Category {
  id: string
  name: string
  billboardId: string
}

export interface Size {
  id: string
  name: string
  value: string
}

export interface Color {
  id: string
  name: string
  value: string
}

export interface Image {
  id: string
  url: string
}

export interface Product {
  id: string
  name: string
  category: Category
  quantity: string
  price: string
  isFeatured: boolean
  sizes: Size[]
  colors: Color[]
  images: Image[]
}
