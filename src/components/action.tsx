'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import useCart from '@/hooks/use-cart'
import { Button } from '@/components/ui/button'

const Action = () => {
  const router = useRouter()

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const cart = useCart()

  if (!isMounted) {
    return null
  }

  return (
    <Button
      onClick={() => router.push('/cart')}
      variant="link"
      className="relative pr-2 font-bold uppercase text-inherit hover:no-underline"
      title="View your cart"
    >
      Bag
      <span className="absolute right-0 top-0 text-xs">
        {cart.products.length}
      </span>
    </Button>
  )
}

export default Action
