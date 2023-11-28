'use client'

import { MouseEventHandler } from 'react'
import { Button } from '@/components/ui/button'

interface IconButtonProps {
  icon: React.ReactElement
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="link"
      size="icon"
      className="h-max w-max transition hover:scale-110"
    >
      {icon}
    </Button>
  )
}

export default IconButton
