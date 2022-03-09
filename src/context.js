import React, { useContext, useState, useEffect } from 'react'
import { pagination } from './pagination'
import axios from 'axios'

const AppContext = React.createContext()
const url = 'https://api.github.com/users/bradtraversy/followers?per_page=100'

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [followers, setFollowers] = useState([])

  const fetchFollowers = async () => {
    // setIsLoading(true)
    await axios(url)
      .then(({ data }) => {
        setFollowers(pagination(data))
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    fetchFollowers()
  }, [])

  return (
    <AppContext.Provider value={{ followers, isLoading, setFollowers }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
