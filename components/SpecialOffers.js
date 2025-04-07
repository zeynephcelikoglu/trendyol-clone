import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import OfferCard from './OfferCard';

const { width } = Dimensions.get('window');

const bannerData = [
  {
    id: 1,
    title: "Özel Fırsatlar",
    description: "En iyi fırsatları kaçırmayın!",
    image: require('../assets/offer.png') // senin gönderdiğin görsel
  },
  {
    id: 2,
    title: "Sana Özel",
    description: "Sadece senin için seçildi!",
    image: require('../assets/offer2.png') 
  }
];

export default function SpecialOffers() {
  return (
    <View >
      <FlatList
        data={bannerData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ width }}>
            <OfferCard offer={item} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

