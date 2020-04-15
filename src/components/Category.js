import React from 'react';
import { View, Image, Text } from 'react-native';

// import { Container } from './styles';

export default function Category({imageUri, name}) {
  return (
    <View style={{ height: 130, width: 130,
      marginRight: 15, borderWidth:0.5,
        borderColor: '#dddddd' }}>
          <View style={{ flex:2}}>
            <Image source={imageUri}
              style={{ flex: 1, width: null,
                height: null, resizeMode: 'cover'}}/>
          </View>
          <View style={{ flex: 1, paddingLeft: 10,
            paddingTop: 10 }}>
              <Text>{name}</Text>
          </View>
    </View>
  );
}