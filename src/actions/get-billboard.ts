import { Billboard } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboard = async (id: string): Promise<Billboard> => {
  try {
    const result = await fetch(`${URL}/${id}`)

    if (!result.ok) {
      throw new Error('Failed to fetch data')
    }

    return result.json()
  } catch (error) {
    console.log(error)
    return { id: '', label: '', imageUrl: '' }
  }
}

export default getBillboard
