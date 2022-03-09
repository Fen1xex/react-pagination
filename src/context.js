import React, { useContext } from 'react'

const AppContext = React.createContext()
const url = 'https://api.github.com/users/bradtraversy/followers?per_page=100'

const AppProvider = ({ children }) => {
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
