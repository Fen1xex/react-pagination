import React, { useState, useEffect } from 'react'
import { useGlobalContext } from './context'
import styled from 'styled-components'

const App = () => {
  const { followers, isLoading } = useGlobalContext()
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    if (isLoading) return
    setData(followers[page])
  }, [isLoading])

  return (
    <Wrapper>
      {data.map((follower) => {
        const { html_url, avatar_url, login, id } = follower
        return (
          <article key={id}>
            <a href={html_url}>
              <img src={avatar_url} alt={login} />
            </a>
            <h3>{login}</h3>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2rem;
  article {
    position: relative;
    img {
      width: 100%;
      border: 3px solid black;
      border-radius: var(--radius);
    }
    h3 {
      color: var(--blue);
      text-align: center;
    }
  }
`

export default App
