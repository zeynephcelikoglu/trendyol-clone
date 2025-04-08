import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.image} />
      
      <Text numberOfLines={2} style={styles.title}>{product.title}</Text>

      <View style={styles.priceRow}>
        <Text style={styles.price}>{product.price} TL</Text>
      </View>

      <View style={styles.ratingRow}>
        <Ionicons name="star" size={14} color="#FFD700" />
        <Text style={styles.ratingText}>{product.rating?.rate || '4.5'}</Text>
        <Text style={styles.reviewText}>({product.rating?.count || '120'})</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#eee', 
    
  },
  
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
    height: 40,
  },
  priceRow: {
    marginTop: 4,
  },
  price: {
    color: '#f2741f',
    fontSize: 16,
    fontWeight: '600',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    fontSize: 13,
    marginLeft: 4,
  },
  reviewText: {
    fontSize: 12,
    marginLeft: 4,
    color: '#666',
  },
});


