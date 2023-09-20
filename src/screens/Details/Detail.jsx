import { Text, View, Image } from 'react-native'
import React from 'react'
import { Header } from '../../components/Index'
import styles from './Detail.style'

const Detail = ({route}) => {
  const { item } = route.params
  return (
    <View style={styles.container}>
      <Header title={'Detalle'} />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{
            uri: item.images[1],
          }} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>   
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.txtDesc}>{item.description}</Text>   
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`$${item.price}`}</Text>  
      </View>
    </View>
  )
}

export default Detail