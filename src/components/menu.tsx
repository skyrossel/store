'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import { MenuIcon } from 'lucide-react'
import { Category } from '@/types'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

interface MenuProps {
  categories: Category[]
}

const Menu: React.FC<MenuProps> = ({ categories }) => {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  const male = categories.filter(
    (category) =>
      category.billboardId === 'f6df046c-7479-4b17-b684-9fe16c411f20',
  )
  const female = categories.filter(
    (category) =>
      category.billboardId === '08571391-c672-4ec9-bccc-e5c1a726461b',
  )

  const men = male.map((man) => ({
    active: pathname === `/categories/${man.id}`,
    href: `/categories/${man.id}`,
    name: man.name,
  }))
  const women = female.map((woman) => ({
    active: pathname === `/categories/${woman.id}`,
    href: `/categories/${woman.id}`,
    name: woman.name,
  }))

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="pl-0 font-bold text-inherit hover:bg-transparent hover:text-inherit"
          title="Menu"
        >
          <MenuIcon className="mr-2" />
          <span className="hidden md:block">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <ScrollArea className="h-full">
          <div className="flex flex-col gap-y-8 px-6">
            <h2 className="text-lg font-semibold uppercase text-primary-foreground sm:text-xl sm:tracking-tight md:text-2xl lg:text-3xl">
              Menu
            </h2>
            <Accordion type="multiple">
              <AccordionItem value="male">
                <AccordionTrigger>Male</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-y-2">
                    {men.map((man, index) => (
                      <Link
                        onClick={() => setIsOpen(false)}
                        key={index}
                        href={man.href}
                        className={buttonVariants({
                          variant: 'link',
                          className: cn(
                            'uppercase text-primary-foreground hover:text-muted-foreground',
                            man.active && 'underline',
                          ),
                        })}
                      >
                        {man.name}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="female">
                <AccordionTrigger>Female</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-y-2">
                    {women.map((woman, index) => (
                      <Link
                        onClick={() => setIsOpen(false)}
                        key={index}
                        href={woman.href}
                        className={buttonVariants({
                          variant: 'link',
                          className: cn(
                            'uppercase text-primary-foreground hover:text-muted-foreground',
                            woman.active && 'underline',
                          ),
                        })}
                      >
                        {woman.name}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export default Menu
