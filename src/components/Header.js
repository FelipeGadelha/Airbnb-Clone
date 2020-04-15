import React from 'react';
import { View,  
          TextInput,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

import Tag from './Tag';

export default function components() {
  return (
    <View style={{ height: Constants.statusBarHeight + 90 , backgroundColor: 'white',
      borderBottomWidth: 1, borderBottomColor: '#dddddd'}}>
        <View style={{ 
          flexDirection: 'row', padding: 10,
          backgroundColor: 'white', marginHorizontal: 20,
          shadowOffset: {width: 0, height: 0},
          shadowColor: 'black',
          shadowOpacity: 0.2,
          borderRadius: 40,
          elevation: 1,
          marginTop: Constants.statusBarHeight,
            alignItems: 'center',
            
          }}>
            <Ionicons name="md-search" size={20} style={{
              marginRight: 10
            }}/>
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Try New Delhi"
              placeholderTextColor="grey"
              style={{ flex: 1, fontWeight: '700',
              backgroundColor: 'white' }}
            />
          </View>
          <View
            style={{flexDirection: 'row', marginHorizontal: 30,
              position: 'relative', top: 10}}
          >
            <Tag name = "Guests"/>
            <Tag name = "Dates"/>
          </View>
        </View>
  );
}
