import styled from 'styled-components'

export const Main = styled.main`
  background: #ade1e2;
`

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  padding: 64px 0;
`

export const Grid = styled.div`
  display: grid;
  max-width: 1200px;
  margin: auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 32px;
  padding-bottom: 64px;
  align-items: center;
`
