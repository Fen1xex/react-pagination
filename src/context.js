import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'

const AppContext = React.createContext()
const url = 'https://api.github.com/users/bradtraversy/followers?per_page=100'

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [followers, setFollowers] = useState([])

  const fetchFollowers = async () => {
    setIsLoading(true)
    await axios(url)
      .then(({ data }) => {
        setFollowers(data)
      })
      .catch((error) => console.log(error))
    setIsLoading(false)
  }
  useEffect(() => {
    fetchFollowers()
  }, [])

  return (
    <AppContext.Provider value={{ followers, isLoading }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
