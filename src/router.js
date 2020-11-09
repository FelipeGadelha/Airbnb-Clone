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
              <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28px" height="28px">
                <Path fill={color} d="M42.459,32.519c-1.037-3.336-9.539-19.596-12.12-24.5l-0.026-0.048C29.153,5.559,26.676,4,24,4 s-5.153,1.559-6.291,3.929L17.661,8.02C15.08,12.923,6.578,29.183,5.542,32.518C5.261,33.421,5,34.407,5,35.5 c0,4.687,3.813,8.5,8.5,8.5c4.654,0,7.612-1.949,10.5-5.184C26.888,42.051,29.846,44,34.5,44c4.687,0,8.5-3.813,8.5-8.5 C43,34.407,42.739,33.421,42.459,32.519z M23.999,34.662C22.33,32.515,20,28.881,20,26c0-2.206,1.794-4,4-4s4,1.794,4,4 C28,28.872,25.668,32.511,23.999,34.662z M34.5,41c-3.287,0-5.521-1.107-8.325-4.258C27.878,34.596,31,30.104,31,26 c0-3.86-3.141-7-7-7s-7,3.14-7,7c0,4.104,3.122,8.596,4.825,10.742C19.021,39.893,16.787,41,13.5,41C10.468,41,8,38.533,8,35.5 c0-0.653,0.162-1.308,0.406-2.09C9.17,30.95,15.3,18.948,20.316,9.417l0.076-0.146C21.055,7.891,22.471,7,24,7 s2.945,0.891,3.615,2.285l0.068,0.132C32.7,18.948,38.83,30.95,39.595,33.411C39.838,34.192,40,34.847,40,35.5 C40,38.533,37.532,41,34.5,41z"/>
              </Svg>

              // <Svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  
              //   viewBox="0 0 50 50" width="30px" height="30px">
              //   <Path fill="none" stroke={color} stroke-linejoin="round" stroke-miterlimit="10" stroke-width="8" d="M24.128,36.098 c-1.728-2.14-4.628-6.261-4.628-9.812C19.5,23.371,21.967,21,25,21s5.5,2.371,5.5,5.286c0,3.541-2.9,7.667-4.63,9.811l-0.871,1.08 L24.128,36.098z"/>
              //   <Path fill="none" stroke={color} stroke-miterlimit="10" stroke-width="8" d="M36.64,45c-4.837,0-8.851-4.552-10.565-6.495 L25,37.301l-1.074,1.203C22.211,40.448,18.197,45,13.36,45c-4.031,0-7.31-3.271-7.31-7.29c0-0.943,0.261-1.871,0.506-2.666 c0.501-1.598,5.856-12.417,13.323-26.917C20.879,6.168,22.793,5,25,5s4.121,1.168,5.119,3.125 c7.469,14.504,12.824,25.323,13.327,26.925c0.243,0.792,0.504,1.721,0.504,2.661C43.95,41.729,40.671,45,36.64,45z"/>
              // </Svg>
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
