import { Color } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`

const getColors = async (): Promise<Color[]> => {
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

export default getColors
