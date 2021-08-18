import React from 'react'
import { Container, Description, Title } from './styles'

interface CardProps {
  title: string
  description: string
}
const Card = ({ title, description }: CardProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

export default Card
