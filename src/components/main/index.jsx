import React from 'react'
import Body from '../body'
import Header from '../header'
import { Container, MainWrapper } from './Main.styled'

const Main = () => {
  return (
    <Container>
        <MainWrapper>
        <Header />
        <Body />
        </MainWrapper>
    </Container>
  )
}

export default Main