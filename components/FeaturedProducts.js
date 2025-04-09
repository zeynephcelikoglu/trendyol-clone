import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProductCard from './ProductCard';
import { useNavigation } from '@react-navigation/native';

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Ürünleri çekerken hata:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#f2741f" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Öne Çıkan Ürünler</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
          <Ionicons name="chevron-forward" size={24} color="#f2741f" />
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={products}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    paddingHorizontal: 16, 
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
  },
  loader: {
    marginVertical: 30,
    alignItems: 'center',
  },
});
