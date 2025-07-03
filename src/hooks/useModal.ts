'use client'

import { useState, useCallback } from 'react'

interface UseModalReturn {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
  toggleModal: () => void
}

export function useModal(initialState = false): UseModalReturn {
  const [isOpen, setIsOpen] = useState(initialState)

  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggleModal = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal
  }
}

// For confirmation modals with async actions
interface UseConfirmationModalOptions {
  onConfirm?: () => Promise<void> | void
  onCancel?: () => void
}

interface UseConfirmationModalReturn extends UseModalReturn {
  isLoading: boolean
  confirm: () => Promise<void>
  cancel: () => void
}

export function useConfirmationModal(
  options: UseConfirmationModalOptions = {}
): UseConfirmationModalReturn {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    setIsLoading(false)
  }, [])

  const toggleModal = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const confirm = useCallback(async () => {
    if (options.onConfirm) {
      setIsLoading(true)
      try {
        await options.onConfirm()
        closeModal()
      } catch (error) {
        console.error('Confirmation action failed:', error)
        setIsLoading(false)
      }
    } else {
      closeModal()
    }
  }, [options.onConfirm, closeModal])

  const cancel = useCallback(() => {
    if (options.onCancel) {
      options.onCancel()
    }
    closeModal()
  }, [options.onCancel, closeModal])

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
    isLoading,
    confirm,
    cancel
  }
}

// For managing multiple modals
type ModalState = {
  [key: string]: boolean
}

interface UseMultiModalReturn {
  modals: ModalState
  openModal: (modalId: string) => void
  closeModal: (modalId: string) => void
  closeAllModals: () => void
  toggleModal: (modalId: string) => void
  isAnyModalOpen: boolean
}

export function useMultiModal(modalIds: string[]): UseMultiModalReturn {
  const [modals, setModals] = useState<ModalState>(
    modalIds.reduce((acc, id) => ({ ...acc, [id]: false }), {})
  )

  const openModal = useCallback((modalId: string) => {
    setModals(prev => ({ ...prev, [modalId]: true }))
  }, [])

  const closeModal = useCallback((modalId: string) => {
    setModals(prev => ({ ...prev, [modalId]: false }))
  }, [])

  const closeAllModals = useCallback(() => {
    setModals(prev => 
      Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {})
    )
  }, [])

  const toggleModal = useCallback((modalId: string) => {
    setModals(prev => ({ ...prev, [modalId]: !prev[modalId] }))
  }, [])

  const isAnyModalOpen = Object.values(modals).some(Boolean)

  return {
    modals,
    openModal,
    closeModal,
    closeAllModals,
    toggleModal,
    isAnyModalOpen
  }
}