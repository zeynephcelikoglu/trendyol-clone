import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import OfferCard from './OfferCard';

const { width } = Dimensions.get('window');

const bannerData = [
  {
    id: 1,
    title: "Spor Ayakkabılar",
    description: "Sonbahar Koleksiyonu",
    imageUrl: "https://images.puma.net/images/376540/01/sv01/fnd/TUR/w/1000/h/1000/bg/255,255,255",
    backgroundColor: '#f2741f',
    discount: 50,
    originalPrice: 4000.99,
    badgeText: "SON 1 GÜN",
    timer: "12:34:56"
  },
  {
    id: 2,
    title: "Akıllı Saatler",
    description: "Yeni Model Cihazlar",
    imageUrl: "https://banner2.cleanpng.com/20180821/rbt/a9135b1a34c9c737aaa375802cf0f50d.webp",
    backgroundColor: '#FF4B2B',
    discount: 30,
    originalPrice: 5000.99,
    badgeText: "SÜPER FIRSAT",
    timer: "23:59:59"
  },
  {
    id: 3,
    title: "Kozmetik Seti",
    description: "Premium Bakım Ürünleri",
    imageUrl: "https://www.sephora.com/productimages/sku/s2238145-main-zoom.jpg",
    backgroundColor: '#FF9500',
    discount: 45,
    originalPrice: 3800.99,
    badgeText: "ÖZEL FIRSAT",
    timer: "06:12:33"
  }
];

export default function SpecialOffers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / (width - 32));
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={bannerData}
        horizontal
        pagingEnabled
        snapToInterval={width - 32}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <OfferCard offer={item} />
          </View>
        )}
        contentContainerStyle={styles.flatListContent}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      
      <View style={styles.pagination}>
        {bannerData.map((_, index) => (
          <View 
            key={index} 
            style={[
              styles.paginationDot,
              index === currentIndex && styles.activeDot
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    height: 220,
    marginBottom: 8,
  },
  flatListContent: {
    paddingLeft: 16,
    paddingRight: 8
  },
  slide: {
    width: width - 32,
    marginRight: 8,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ddd',
    marginHorizontal: 4
  },
  activeDot: {
    backgroundColor: '#f2741f',
    width: 16
  }
});