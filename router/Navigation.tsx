import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { HomePage } from '../components/HomePage';
import { LookImage } from '../components/LookImage';
import { navigateParamList } from '../interfaces/ParamList';
import { HeaderBackground } from '../styles/HeaderBackground';

const Stack = createStackNavigator<navigateParamList>()

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown:false}}/>
        <Stack.Screen
        name="LookImage"
        component={LookImage}
        options={({route}) => ({
          title:route.params.tags,
          headerTitleAlign:'center',
          headerTitleStyle:{color:'white'},
          headerBackTitleStyle:{color:'red'},
          headerBackground:() => <HeaderBackground/>,
          headerBackImage:() => (
            <Icon name="arrow-left" size={25} color="#fff"/>
          ),
          headerBackgroundContainerStyle:{backgroundColor:'#212529'}
        })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
