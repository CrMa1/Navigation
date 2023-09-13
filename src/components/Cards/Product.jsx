import { View } from 'react-native'
import React from 'react'
import styles from './Product.style'

const CardProduct = ({children, style}) => {
  return (
    <View style={[styles.container, style]}>{children}</View>
  )
}

export default CardProduct

