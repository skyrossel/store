import useCart from '@/hooks/use-cart'
import { formatter } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

const Summary = () => {
  const products = useCart((state) => state.products)

  const totalPrice = products.reduce((total, product) => {
    return total + Number(product.price)
  }, 0)

  return (
    <div className="flex h-max flex-col justify-between gap-y-6 bg-zinc-800 p-4">
      <div className="flex flex-col gap-y-4">
        <h3 className="text-base font-semibold uppercase text-primary-foreground md:text-lg lg:text-xl lg:tracking-tight xl:text-2xl">
          Order summary
        </h3>
        <Separator />
        <div className="flex flex-col gap-y-1">
          {products.map((product, index) => (
            <div key={index} className="flex items-center justify-between">
              <h6 className="text-sm uppercase text-primary-foreground md:text-base">
                {product.name}
              </h6>
              <div className="text-sm text-primary-foreground md:text-base">
                {formatter.format(Number(product.price))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="text-end text-sm uppercase text-primary-foreground md:text-base">
          Subtotal: {formatter.format(totalPrice)}
        </div>
        <Button variant="secondary">Checkout</Button>
      </div>
    </div>
  )
}

export default Summary
