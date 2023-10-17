
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Trang1 from "./Trang1";
import Trangmau from "./Trangmau"

const Stack = createStackNavigator();
 const Navigation =() =>{
    return(
      <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown: false}} >
                <Stack.Screen name='Trang1' 
                              component={Trang1}
                              ></Stack.Screen>
                <Stack.Screen name='Trangmau' component={Trangmau}
                                
                ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
 }
export default Navigation;