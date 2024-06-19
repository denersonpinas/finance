'use client'

import { useEffect, useState } from 'react'
import { useLocalStorage } from '@/hook/useLocalStorage'

const COLLAPSE_KEY = 'COLLAPSE_KEY'

export const useSidebar = () => {
  const { getLocalStorage, setLocalStorage } = useLocalStorage()
  const collapseStorage = Boolean(
    typeof window !== 'undefined' ? getLocalStorage(COLLAPSE_KEY) : false
  )

  const [isCollapse, setIsCollapse] = useState<boolean>(() =>
    collapseStorage ? collapseStorage : false
  )

  const [isMounted, setIsMounted] = useState<boolean>(false)

  const handleCollapseSidebar = () => {
    setIsCollapse(!isCollapse)

    setLocalStorage(COLLAPSE_KEY, !isCollapse)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    setIsMounted(true)
  }, [setIsMounted])

  return {
    isCollapse,
    isMounted,
    handleCollapseSidebar
  }
}
