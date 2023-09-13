import { Text, View, TouchableOpacity } from 'react-native'
import styles from './Header.style'
import React from 'react'

const Header = ({ title, back, setProductSelected }) => {
  return (
    <View style={styles.container}>
      {
        back ? 
        <TouchableOpacity style={styles.backStyle} onPress={() => setProductSelected()}>
          <Text style={styles.backItem}>{`<`}</Text>
        </TouchableOpacity>
        :
        ''
      }
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

