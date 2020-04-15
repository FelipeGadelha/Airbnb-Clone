import React from 'react';
import { View,
          Text,
          Image
} from 'react-native';
import StarRating from 'react-native-star-rating';

import home from '../assets/home.jpg'

export default function Home({width, type, name, price, rating}) {

  return (
    <View style={{ width: width / 2 - 30, height: width / 2 - 30,
      borderWidth: 0.5, borderColor: '#dddddd', marginBottom: 15}}>
      <View style={{ flex: 1 }}>
        <Image source={ home } 
          style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
        />
      </View>
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly',
        paddingLeft: 10 }}>
        <Text style= {{ fontSize: 10, color: '#b63838'}}>{ type }</Text>
        <Text style= {{ fontSize: 12, fontWeight: 'bold' }}>{ name }</Text>
    <Text style= {{ fontSize: 10 }}>{ price }$</Text>
        <StarRating
          disable = { true }
          maxStars = { 5 }
          rating = { rating }
          starSize = { 10 }
        />
      </View>
    </View>
  );
}
