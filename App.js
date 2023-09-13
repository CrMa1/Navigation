import { useState } from 'react';
import { Home, Products, Detail } from './src/screens/Index'
import {useFonts} from 'expo-font'
import fonts from './src/global/fonts';

export default function App() {

  const [fontsLoaded] = useFonts(fonts)

  const [categorySelected,setCategorySelected] = useState('')
  const [productSelected,setProductSelected] = useState('')

  if (!fontsLoaded){
    return null
  }

  return productSelected ? <Detail product={productSelected} setProductSelected={setProductSelected} /> :
  categorySelected ? (
    <Products category={categorySelected} setProductSelected={setProductSelected} />
  ) : (
    <Home setCategorySelected={setCategorySelected} />
  )

}