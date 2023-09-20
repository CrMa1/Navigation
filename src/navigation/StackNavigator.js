import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Detail, Home, Products } from "../screens/Index";
import { View } from "react-native";
import { Header } from "../components/Index";
const Stak = createNativeStackNavigator()

function StackNavigator (){
    return (
    <NavigationContainer>
      <Stak.Navigator 
        initialRouteName="Home" 
        screenOptions={({route}) => ({
        })}
      >
        <Stak.Screen name="Home" component={Home} /> 
        <Stak.Screen name="Products" component={Products} /> 
        <Stak.Screen name="Details" component={Detail} /> 
      </Stak.Navigator> 
    </NavigationContainer>
    )
}

export default StackNavigator;