import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const categories = [
  { title: "Kategoriler" },
  { title: "Kadın" },
  { title: "Erkek" },
  { title: "Ev & Yaşam" },
  { title: "Elektronik" },
  { title: "Spor" },
  { title: "Çocuk" },
  { title: "Kozmetik" },
  { title: "Market" },
];

export default function CategoryRow() {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((item, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <Text style={styles.categoryTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12, // Kenar boşluklarını azalttık
    marginTop: 16,
  },
  header: {
    fontSize: 16, // Başlık boyutunu küçülttük
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
    paddingLeft: 4, // Hafif sola kaydırma
  },
  scrollContent: {
    paddingRight: 12,
  },
  categoryItem: {
    backgroundColor: 'white',
    borderRadius: 16, // Yuvarlaklık oranını artırdık
    borderWidth: 1,
    borderColor: '#eee',
    paddingHorizontal: 16, // Yatay padding
    paddingVertical: 10, // Dikey padding
    marginRight: 8, // Kutular arası boşluğu azalttık
    justifyContent: 'center',
    alignItems: 'center',
    height: 40, // Kutu yüksekliği
  },
  categoryTitle: {
    fontSize: 13,
    color: '#333',
    fontWeight: '500',
  },
});


