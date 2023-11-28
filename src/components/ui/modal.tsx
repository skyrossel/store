'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className="max-w-7xl px-0">
        <ScrollArea className="h-[calc(100vh-6.5rem)]">
          {children}
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
