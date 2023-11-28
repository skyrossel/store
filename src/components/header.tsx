'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useCallback, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Category } from '@/types'
import Container from '@/components/ui/container'
import Menu from '@/components/menu'
import Action from '@/components/action'

interface HeaderProps {
  categories: Category[]
}

const Header: React.FC<HeaderProps> = ({ categories }) => {
  const pathname = usePathname()

  const onScroll = useCallback(() => {
    if (pathname === '/') {
      const header = document.querySelector('header')

      if (header) {
        const screen = window.innerWidth >= 768 ? 100 : 200

        if ((window.scrollY / window.innerHeight) * 100 >= screen) {
          header.classList.add('text-foreground')
          header.classList.remove('text-primary-foreground')
        } else {
          header.classList.add('text-primary-foreground')
          header.classList.remove('text-foreground')
        }
      }
    }

    return
  }, [pathname])

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [onScroll])

  return (
    <header
      className={cn(
        'fixed left-0 top-0 z-50 w-full bg-transparent',
        pathname === '/' ? 'text-primary-foreground' : 'text-foreground',
      )}
    >
      <Container className="pt-4 md:pt-8">
        <div className="grid grid-cols-[auto,1fr,auto] items-center gap-x-6">
          <Menu categories={categories} />
          <Link
            href="/"
            className="mx-auto w-max py-2 font-logo font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:pl-0 md:pr-10"
            title="Home Page"
          >
            Store
          </Link>
          <Action />
        </div>
      </Container>
    </header>
  )
}

export default Header
