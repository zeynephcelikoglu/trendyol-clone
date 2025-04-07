import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import SpecialOffers from '../components/SpecialOffers';

export default function HomePage() {
  return (
    <ScrollView>
      <SearchBar />
      <SpecialOffers />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
