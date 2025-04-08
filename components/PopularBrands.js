import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const dummyBrands = [
    {
      id: 1,
      name: 'Apple',
      logo: 'https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-icon-16.png'
    },
    {
      id: 2,
      name: 'Samsung',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png'
    },
    {
      id: 3,
      name: 'Sony',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png'
    },
    {
      id: 4,
      name: 'Xiaomi',
      logo: 'https://logos-world.net/wp-content/uploads/2020/07/Xiaomi-Logo.png'
    },
    {
        id: 2,
        name: 'Nike',
        logo: 'https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo.png'
    },
    {
        id: 6,
        name: 'Puma',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo.png'
    },
    {
        id: 4,
        name: 'Adidas',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png'
    },
    
  ];

export default function PopularBrands() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popüler Markalar</Text>
      <FlatList
        data={dummyBrands}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id} style={styles.brandBox}>
            <Image 
            source={{ uri: item.logo }} 
            style={styles.logo}
            resizeMode="contain"
            onError={(e) => console.log('Failed to load image', e.nativeEvent.error)}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 8,
  },
  listContent: {
    paddingRight: 16,
  },
  brandBox: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    marginRight: 12,
    padding: 5,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});


