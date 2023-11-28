import { Product } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProduct = async (id: string): Promise<Product> => {
  try {
    const result = await fetch(`${URL}/${id}`)

    if (!result.ok) {
      throw new Error('Failed to fetch data')
    }

    return result.json()
  } catch (error) {
    console.log(error)
    return {
      id: '',
      name: '',
      quantity: '',
      price: '',
      category: {
        id: '',
        name: '',
        billboardId: '',
      },
      sizes: [],
      colors: [],
      images: [],
      isFeatured: false,
    }
  }
}

export default getProduct
