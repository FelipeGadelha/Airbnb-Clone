import React from 'react';
import { View, 
          Text, 
          SafeAreaView, 
          TextInput, 
          ScrollView, 
          Image,
          Dimensions,
          Animated
} from 'react-native';

//import { Ionicons } from '@expo/vector-icons';
//import Constants from 'expo-constants';

import homeImg from '../../assets/home.jpg';
import experiencesImg from '../../assets/experiences.jpg';
import restaurantImg from '../../assets/restaurant.jpg';
import Category from '../../components/Category.js';
import Home from '../../components/Home.js';

export default function Explore() {
 
  const { height, width } = Dimensions.get('window');

  return (
    <SafeAreaView style={{flex: 1 }}>
      <View style={{flex: 1 }}>
        <ScrollView scrollEventThrottle={16}>
          <View style={{ flex: 1, backgroundColor: 'white',
            paddingTop: 20, paddingBottom: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: '700',
              paddingHorizontal: 20 }}>
              What can we help you find, Varun?
            </Text>
            <View style={{ height: 130, marginTop: 20, marginRight: 20, marginLeft: 20}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Category imageUri = { homeImg }
                  name="Home"                
                />
                <Category imageUri = { experiencesImg }
                  name="Experiences"                
                />
                <Category imageUri = { restaurantImg }
                  name="Restaurant"                
                />
              </ScrollView>
            </View>
            <View style={{ marginTop: 40, paddingHorizontal: 20}}>
              <Text style={{ fontSize: 24, fontWeight: '700'}}>
                Introducing Airbnb Plus
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10}}>
                A new selection of home verified for quility & comfort
              </Text>
              <View style={{ width: width - 40, height: 200,
                marginTop: 20}}>
                <Image style={{flex:1, height: null, width: null,
                  resizeMode: 'cover',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#dddddd' }}
                  source= { homeImg }/>
              </View>
            </View>
            <View style={{ marginTop: 40 }}>
              <Text style={{ fontSize: 24, fontWeight: '700',
                paddingHorizontal: 20 }}>
                    Homes around the world
              </Text>
              <View style= {{ paddingHorizontal: 20, 
                  marginTop: 20, flexDirection: 'row', flexWrap: 'wrap',
                  justifyContent: 'space-between' }}>
                <Home width = { width }
                      name = "The Cozy Place"
                      type = "PRIVATE ROOM - 2 BEDS"
                      price = {82}
                      rating = {4}
                />
                <Home width = { width }
                      name = "The Cozy Place"
                      type = "PRIVATE ROOM - 2 BEDS"
                      price = {82}
                      rating = {4}
                />
                <Home width = { width }
                      name = "The Cozy Place"
                      type = "PRIVATE ROOM - 2 BEDS"
                      price = {82}
                      rating = {4}
                />
                <Home width = { width }
                      name = "The Cozy Place"
                      type = "PRIVATE ROOM - 2 BEDS"
                      price = {82}
                      rating = {4}
                />
              </View>          
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
