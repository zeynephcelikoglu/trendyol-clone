import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function OfferCard({ offer }) {
  return (
    <View style={[styles.card, { backgroundColor: offer.backgroundColor }]}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{offer.badgeText}</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{offer.title}</Text>
          <Text style={styles.description}>{offer.description}</Text>

          <View style={styles.priceContainer}>
            <Text style={styles.discountText}>%{offer.discount}</Text>
            <Text style={styles.originalPrice}>{offer.originalPrice.toFixed(2)} TL</Text>
          </View>
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Hemen Al</Text>
          </TouchableOpacity>
        </View>
        
        <Image
          source={{ uri: offer.imageUrl }}
          style={styles.image}
          resizeMode="contain"
          progressiveRenderingEnabled={true}
        />
      </View>
      
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>Son {offer.timer}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: '100%',
    borderRadius: 12,
    overflow: 'hidden'
  },
  content: {
    flexDirection: 'row',
    height: '100%',
    padding: 16,
    alignItems: 'center'
  },
  textContainer: {
    flex: 1,
    marginRight: 16
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4
  },
  description: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 8
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12 
  },
  discountText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
    marginRight: 8,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2
  },
  originalPrice: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    textDecorationLine: 'line-through'
  },
  button: {
    marginTop: 4, 
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500'
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)'
  },
  badge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#FFD300',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    zIndex: 2
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000'
  },
  timerContainer: {
    position: 'absolute',
    top: 12,
    right: 12, 
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    zIndex: 2 
  },
  timerText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '500'
  }
});
