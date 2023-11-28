'use client'

import { useEffect, useState } from 'react'
import useCart from '@/hooks/use-cart'
import Container from '@/components/ui/container'
import CartItem from '@/components/ui/cart-item'
import Summary from '@/components/ui/summary'

export default function CartPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const cart = useCart()

  if (!isMounted) {
    return null
  }

  return (
    <Container className="pt-20 md:pt-24">
      <div className="flex flex-col gap-y-6 pb-6">
        <h2 className="inline-flex items-center text-lg font-semibold uppercase sm:text-xl sm:tracking-tight md:text-2xl lg:text-3xl">
          Cart ({cart.products.length})
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cart.products.length === 0 ? (
            <h3 className="text-base uppercase md:text-lg lg:text-xl lg:tracking-tight xl:text-2xl">
              Your cart is currently empty.
            </h3>
          ) : (
            <ul className="flex flex-col gap-y-4">
              {cart.products.map((product, index) => (
                <CartItem key={index} product={product} />
              ))}
            </ul>
          )}
          <Summary />
        </div>
      </div>
    </Container>
  )
}
