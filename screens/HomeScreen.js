import React, { useState } from 'react'; 
import { View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar.js';
import SpecialOffers from '../components/SpecialOffers.js';
import ActionRow from '../components/ActionRow.js';
import FeaturedProducts from '../components/FeaturedProducts.js';
import PopularBrands from '../components/PopularBrands.js';
import BottomBar from '../components/BottomBar.js';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <SearchBar />
        <ActionRow />
        <SpecialOffers />
        <FeaturedProducts />
        <PopularBrands />
      </ScrollView>

      <BottomBar activeTab={activeTab} setActiveTab={setActiveTab}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor:"white"
  },
  scrollContent: {
    paddingBottom: 60, 
  }
});

