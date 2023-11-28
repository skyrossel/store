import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Billboard as BillboardType } from '@/types'

interface BillboardProps {
  billboard: BillboardType
  href: string
}

const Billboard: React.FC<BillboardProps> = ({ billboard, href }) => {
  return (
    <Link
      href={`/collections/new-arrival-${href}`}
      className="group relative flex aspect-square h-screen w-full items-end overflow-hidden p-4 md:p-8"
    >
      <Image
        src={billboard.imageUrl}
        alt={billboard.label}
        fill
        className="object-cover transition-transform group-hover:md:scale-105"
      />
      <span className="relative inline-flex w-full items-center justify-between text-sm font-bold uppercase text-primary-foreground">
        {billboard.label}
        <ChevronRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
      </span>
    </Link>
  )
}

export default Billboard
