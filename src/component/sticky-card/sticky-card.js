import React, { useState } from 'react'
import { Card, Text } from './sticky-card.style'

export const StickyCard = ({ text, top = 20 }) => {
  const [show, setShow] = useState(false)
  return (
    <Card $show={show} $top={top} onClick={(e) => {
      e.stopPropagation()
      setShow((prev) => !prev)
    }}>
      <Text>{text}</Text>
    </Card>
  )
}