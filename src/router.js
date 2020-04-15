import React from 'react';
import { Image, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Header from './components/Header';
import Explore from './pages/Explore';
import Inbox from './pages/Inbox';
import Profile from './pages/Profile';
import Saved from './pages/Saved';
import Trips from './pages/Trips';

const Tab = createBottomTabNavigator();

//import MainRoutes from './routes/main.routes';
//import Main from './pages/Main';

export default function Routes() {
  return (
    
    <NavigationContainer>
      <Header/>
      <Tab.Navigator initialRouteName = 'Explore'
        //screenOptions={{ headerShown: false }}
        tabBarOptions={{

          //activeBackgroundColor: '#f1f1f1',
          activeTintColor: 'red',
          inactiveTintColor: 'grey',
          style: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            shadowOffset: { width: 5, height: 3 },
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 5
          }
      }}
      >
        <Tab.Screen name="Explore" component={Explore} 
          options={{
            tabBarLabel: 'EXPLORE',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-search" color={color} size={size} />
            ),

          }}
          />
        
        <Tab.Screen name="Saved" component={Saved} 
          options={{
            tabBarLabel: 'SAVED',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-heart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Trips" component={Trips} 
          options={{
            tabBarLabel: 'TRIPS',
            tabBarIcon: ({ tintColor }) => (
              <Image source={ require ('./assets/airbnb.png')}
                style={{width: 24, height: 24, tintColor: tintColor }} 
              />
            ),
          }}
        />
        <Tab.Screen name="Inbox" component={Inbox} 
          options={{
            tabBarLabel: 'INBOX',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-chatboxes" color={color} size={size} />
            ),
          }}/>
          <Tab.Screen name="Profile" component={Profile} 
          options={{
            tabBarLabel: 'PROFILE',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-person" color={color} size={size} />
            ),
          }} 
      />
    </Tab.Navigator>      
    </NavigationContainer>
  );
}
