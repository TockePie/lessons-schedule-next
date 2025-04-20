import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

const IsClientContext = createContext<boolean | undefined>(undefined)

const IsClientProvider = ({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => setIsClient(true), [])

  return (
    <IsClientContext.Provider value={isClient}>
      {children}
    </IsClientContext.Provider>
  )
}

const useIsClient = () => {
  const context = useContext(IsClientContext)
  if (context === undefined) throw new Error('IsClientContext is not provided')
  return context
}

export default useIsClient
export { IsClientProvider }
