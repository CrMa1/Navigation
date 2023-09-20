import React from 'react'
import { Text, Pressable } from 'react-native'
import { CardProduct } from '../../../../components/Index' 
import styles from './Item.style'

const CategoryItem = ({category,navigation}) => {
  return (
    <>
      <Pressable onPress={()=> {navigation.navigate('Products', { category })}}>
        <CardProduct style={styles.cardContainer}>
          <Text style={styles.text}>{category}</Text>
        </CardProduct>
      </Pressable>
    </>
  )
}

export default CategoryItem

