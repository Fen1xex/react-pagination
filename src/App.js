import React from 'react'
import { useGlobalContext } from './context'
import styled from 'styled-components'

const App = () => {
  const { followers, isLoading } = useGlobalContext()
  if (isLoading) {
    return <h3>Loading...</h3>
  }
  return (
    <Wrapper>
      {followers.map((follower, index) => {
        return (
          <article key={index}>
            <a href={follower.html_url}>
              <img src={follower.avatar_url} alt={follower.login} />
            </a>
            <h3>{follower.login}</h3>
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
