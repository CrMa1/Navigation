
import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  imageContainer: {
    margin: 10,
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 10
  },
  titleContainer: {
    backgroundColor:'gray',
    margin: 10,
    borderRadius: 10
  }, 
  title: {
    fontSize: 30,
    fontFamily: 'PoppinsThinItalic',
    marginVertical: 15,
    marginLeft: 10
  },
  descContainer: {
    backgroundColor: '#E6E6E6',
    margin: 10,
    padding: 5,
    borderRadius: 10
  },
  txtDesc: {
    marginLeft: 10,
  },
  priceContainer: {
    backgroundColor: '#FBEFEF',
    margin: 10,
    borderRadius: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    marginLeft: 10
  }
})