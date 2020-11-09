import React from 'react';
import { Image, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';

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
            tabBarIcon: ({ color }) => (
              <Svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  
                viewBox="0 0 50 50" width="30px" height="30px">
                <Path fill="none" stroke={color} stroke-linejoin="round" stroke-miterlimit="10" stroke-width="8" d="M24.128,36.098 c-1.728-2.14-4.628-6.261-4.628-9.812C19.5,23.371,21.967,21,25,21s5.5,2.371,5.5,5.286c0,3.541-2.9,7.667-4.63,9.811l-0.871,1.08 L24.128,36.098z"/>
                <Path fill="none" stroke={color} stroke-miterlimit="10" stroke-width="8" d="M36.64,45c-4.837,0-8.851-4.552-10.565-6.495 L25,37.301l-1.074,1.203C22.211,40.448,18.197,45,13.36,45c-4.031,0-7.31-3.271-7.31-7.29c0-0.943,0.261-1.871,0.506-2.666 c0.501-1.598,5.856-12.417,13.323-26.917C20.879,6.168,22.793,5,25,5s4.121,1.168,5.119,3.125 c7.469,14.504,12.824,25.323,13.327,26.925c0.243,0.792,0.504,1.721,0.504,2.661C43.95,41.729,40.671,45,36.64,45z"/>
              </Svg>
              
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
