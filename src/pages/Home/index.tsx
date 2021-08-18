import React from 'react'
import AppBar from '../../components/AppBar'
import Card from '../../components/Card'
import Container from '../../components/Container'

const Home = () => {
  return (
    <div>
      <AppBar />
      <Container>
        <Card title="Thống kê" description="thống kê" />
        <Card title="Thống kê" description="thống kê" />
        <Card title="Thống kê" description="thống kê" />
      </Container>
    </div>
  )
}

export default Home
