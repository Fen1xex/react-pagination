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
  }, [isLoading, page])

  const handlePage = (btn) => {
    if (btn === 'next') {
      setPage((currentPage) => {
        let nextPage = currentPage + 1
        if (nextPage > followers.length - 1) {
          nextPage = 0
        }
        return nextPage
      })
    }
    if (btn === 'prev') {
      setPage((currentPage) => {
        let prevPage = currentPage - 1
        if (prevPage < 0) {
          prevPage = followers.length - 1
        }
        return prevPage
      })
    }
  }

  return (
    <MainWrapper>
      <div className='title'>
        {isLoading ? (
          <h2>Loading</h2>
        ) : (
          <h1>
            <i>Pagination</i>
          </h1>
        )}
      </div>
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

      <Buttons>
        <button className='prev' onClick={() => handlePage('prev')}>
          prev
        </button>
        {followers.map((item, index) => {
          return (
            <button key={index} onClick={() => setPage(index)}>
              {index + 1}
            </button>
          )
        })}
        <button className='next' onClick={() => handlePage('next')}>
          next
        </button>
      </Buttons>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  height: 95vh;
  .title {
    width: 90vw;
    max-width: 1170px;
    margin: 5rem auto;
    text-align: center;
    h1 {
      background: var(--blue);
      width: 40%;
      color: var(--white);
      margin: 0 auto;
      border-radius: var(--radius);
      padding: 1rem 3rem;
    }
  }
`

const Buttons = styled.section`
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    margin: 0 0.5rem;
    background: var(--blue);
    border: 2px solid var(--blue);
    color: var(--white);
    &:hover {
      cursor: pointer;
      background: var(--white);
      color: var(--blue);
      transition: 0.1s;
    }
  }
`

const Wrapper = styled.section`
  width: 90vw;
  height: 70vh;
  max-width: 1170px;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2rem;
  article {
    position: relative;
    height: 260px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: 3px solid black;
      border-radius: var(--radius);
    }
    h3 {
      width: 90%;
      text-align: end;
      color: var(--blue);
      margin-bottom: 0;
      position: absolute;
      bottom: -5%;
      right: -5%;
      background: orange;
      color: black;
      padding: 0.3rem 0.6rem;
      border-radius: 3px;
    }
  }
`

export default App
