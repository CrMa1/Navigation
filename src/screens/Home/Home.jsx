import { Header } from '../../components/Index'
import { View, FlatList } from 'react-native'
import React from 'react'
import styles from './Home.style'
import dataCategories from '../../data/dataCategories'
import { CategoryItem } from './Components/Index'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title='Home' />
      <FlatList 
        data={dataCategories} 
        keyExtractor={category => category}
        renderItem={({ item })=> <CategoryItem category={item} navigation={navigation} />}
      />
    </View>
  )
}

export default Home