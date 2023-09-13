import { Text, View, Image } from 'react-native'
import React from 'react'
import { Header } from '../../components/Index'
import styles from './Detail.style'

const Detail = ({product,setProductSelected}) => {
  return (
    <View style={styles.container}>
      <Header title={'Detalle'} back={true} setProductSelected={setProductSelected} />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{
            uri: product.images[1],
          }} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{product.title}</Text>   
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.txtDesc}>{product.description}</Text>   
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`$${product.price}`}</Text>  
      </View>
    </View>
  )
}

export default Detail