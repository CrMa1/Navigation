import React from 'react'
import { Text, Pressable } from 'react-native'
import { CardProduct } from '../../../../components/Index' 
import styles from './Item.style'

const CategoryItem = ({category,setCategorySelected}) => {
  return (
    <>
      <Pressable onPress={()=> {setCategorySelected(category)}}>
        <CardProduct style={styles.cardContainer}>
          <Text style={styles.text}>{category}</Text>
        </CardProduct>
      </Pressable>
    </>
  )
}

export default CategoryItem

