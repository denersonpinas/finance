'use client'

export const useLocalStorage = () => {
  const getLocalStorage = (key: string) => {
    const data = window.localStorage.getItem(key)

    return JSON.parse(data!)
  }

  const setLocalStorage = (key: string, value: unknown) => {
    const data = JSON.stringify(value)

    return window.localStorage.setItem(key, data)
  }

  return { getLocalStorage, setLocalStorage }
}
