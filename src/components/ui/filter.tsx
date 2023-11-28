'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Color, Size } from '@/types'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import FilterContent from '@/components/ui/filter-content'

interface FilterProps {
  sizes: Size[]
  colors: Color[]
}

const Filter: React.FC<FilterProps> = ({ sizes, colors }) => {
  const [isOpen, setIsOpen] = useState(false)

  const onChange = (open: boolean) => {
    if (open) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={onChange}>
      <SheetTrigger asChild>
        <Button size="sm">
          Filter
          <Plus className="ml-2 h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <ScrollArea className="h-full">
          <div className="flex flex-col gap-y-8 px-6">
            <h2 className="text-lg font-semibold uppercase text-primary-foreground sm:text-xl sm:tracking-tight md:text-2xl lg:text-3xl">
              Filter
            </h2>
            <div
              className={cn('flex flex-col', sizes.length >= 1 && 'gap-y-6')}
            >
              <FilterContent data={sizes} name="Size" valueKey="sizeId" />
              <FilterContent data={colors} name="Color" valueKey="colorId" />
            </div>
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export default Filter
