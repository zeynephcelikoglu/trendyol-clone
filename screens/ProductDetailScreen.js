import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../store/CartContext';

export default function ProductDetailScreen() {
  const route = useRoute();
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const navigation = useNavigation();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, []);

  if (!product) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#f2741f" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar showIcons={false} />

      <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.title}</Text>

        <View style={styles.ratingRow}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}>{product.rating?.rate || 4.5}</Text>
          <Text style={styles.review}>({product.rating?.count || 120})</Text>
        </View>

        <Text style={styles.price}>{product.price} TL</Text>

        <View style={styles.buttons}>
        <TouchableOpacity style={styles.addToCart} 
        onPress={() => {
          addToCart(product);
          navigation.navigate('Cart');
        }}>
          <Text style={styles.btnText}>Sepete Ekle</Text>
        </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: 300,
      marginTop: 12,
    },
    infoContainer: {
      padding: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 8,
    },
    ratingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    rating: {
      fontSize: 14,
      marginLeft: 4,
    },
    review: {
      fontSize: 13,
      marginLeft: 6,
      color: '#666',
    },
    price: {
      fontSize: 22,
      fontWeight: '700',
      color: '#f2741f',
      marginVertical: 12,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 10,
    },
    buyNow: {
      flex: 1,
      backgroundColor: '#FFA500',
      padding: 12,
      borderRadius: 10,
      alignItems: 'center',
    },
    addToCart: {
      flex: 1,
      backgroundColor: '#f2741f',
      padding: 12,
      borderRadius: 10,
      alignItems: 'center',
    },
    btnText: {
      color: '#fff',
      fontWeight: '600',
    },
  });
  