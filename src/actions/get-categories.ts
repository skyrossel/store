import { Category } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategories = async (): Promise<Category[]> => {
  try {
    const result = await fetch(URL)

    if (!result.ok) {
      throw new Error('Failed to fetch data')
    }

    return result.json()
  } catch (error) {
    console.log(error)
    return []
  }
}

export default getCategories
