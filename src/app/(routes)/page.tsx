import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import Billboard from '@/components/ui/billboard'
import Container from '@/components/ui/container'
import ProductList from '@/components/ui/product-list'

export const revalidate = 0

export default async function HomePage() {
  const male = await getBillboard('f6df046c-7479-4b17-b684-9fe16c411f20')
  const female = await getBillboard('08571391-c672-4ec9-bccc-e5c1a726461b')
  const products = await getProducts({ isFeatured: true })

  return (
    <div className="flex flex-col gap-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Billboard billboard={male} href="men" />
        <Billboard billboard={female} href="women" />
      </div>
      <Container>
        <ProductList
          products={products}
          title="Featured Products"
          href="/collections/new-arrival-men"
        />
      </Container>
    </div>
  )
}
