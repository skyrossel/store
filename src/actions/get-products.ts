import qs from 'query-string'
import { Product } from '@/types'

interface Query {
  categoryId?: string
  billboardId?: string
  sizeId?: string[]
  colorId?: string[]
  isFeatured?: boolean
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProducts = async (query: Query): Promise<Product[]> => {
  try {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        categoryId: query.categoryId,
        billboardId: query.billboardId,
        sizeId: query.sizeId,
        colorId: query.colorId,
        isFeatured: query.isFeatured,
      },
    })

    const result = await fetch(url)

    if (!result.ok) {
      throw new Error('Failed to fetch data')
    }

    return result.json()
  } catch (error) {
    console.log(error)
    return []
  }
}

export default getProducts
