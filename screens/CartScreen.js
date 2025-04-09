import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useContext } from 'react';
import { CartContext } from '../store/CartContext';
import { Ionicons } from '@expo/vector-icons';

export default function CartScreen() {
  const route = useRoute();

  const { cartItems, removeFromCart } = useContext(CartContext);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.header}>Sepetim ({cartItems.length} Ürün)</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 50 }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name} numberOfLines={2}>{item.title}</Text>
              <Text style={styles.delivery}>Tahmini Kargo: 2-5 gün</Text>
              <Text style={styles.price}>{item.price.toFixed(2)} TL</Text>
            </View>

            <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.deleteBtn}>
              <Ionicons name="trash-outline" size={20} color="#f2741f" />
            </TouchableOpacity>

          </View>
        )}
      />

      <View style={styles.footer}>
        <View style={styles.total}>
          <Text style={styles.totalLabel}>Toplam</Text>
          <Text style={styles.totalPrice}>{totalPrice.toFixed(2)} TL</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Sepeti Onayla</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
  },
  delivery: {
    fontSize: 12,
    color: '#777',
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f2741f',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 16,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: {
    flex: 1,
  },
  totalLabel: {
    fontSize: 13,
    color: '#666',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#f2741f',
  },
  checkoutButton: {
    backgroundColor: '#f2741f',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});