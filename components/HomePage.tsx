
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react'
import { pages } from '../router/pages';
import { HeaderBackground } from '../styles/HeaderBackground';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { navigateParamList } from '../interfaces/ParamList';

const Tab = createBottomTabNavigator<navigateParamList>();

export const HomePage: FC = () => {
    return (
        <Tab.Navigator>
        {pages.map(page => (
          <Tab.Screen
            key={page.name}
            name={page.name}
            component={page.component}
            options={{
              title: page.title,
              headerTitleStyle:{
                fontSize: 22,
                color: 'white',
                fontWeight: '600',
              },
              headerTitleAlign: 'center',
              headerBackground: () => <HeaderBackground/>,
              tabBarLabel: page.tabLabel,
              tabBarLabelPosition: 'below-icon',
              tabBarIcon: ({color}) => (
                <Icon name={page.iconName} size={24} color={color}/>
              ),
              tabBarLabelStyle:{
                fontSize: 12, 
                fontWeight:"600"
              },
              tabBarActiveTintColor:'#790598',
              tabBarInactiveTintColor:'#94949D'
            }}
          />
        ))}
      </Tab.Navigator>
    )
}