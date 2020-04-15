import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function Tag({ name }) {
  return (
    <View style={{ minHeight: 20, minWidth: 40,
      padding: 5, backgroundColor: 'white',
      borderColor: '#dddddd', borderWidth: 0.2,
      borderRadius: 40, marginRight: 5
    }}>
      <Text style = {{fontWeight:'700', fontSize: 10 }}>{ name }</Text>
    </View>
  );
}
