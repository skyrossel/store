import { Category } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategory = async (id: string): Promise<Category> => {
  try {
    const result = await fetch(`${URL}/${id}`)

    if (!result.ok) {
      throw new Error('Failed to fetch data')
    }

    return result.json()
  } catch (error) {
    console.log(error)
    return { id: '', name: '', billboardId: '' }
  }
}

export default getCategory
