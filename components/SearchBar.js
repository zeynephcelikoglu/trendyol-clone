import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SearchBar() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#f2741f" style={styles.searchIcon} />
          <TextInput
            placeholder="Marka, ürün veya kategori ara"
            style={styles.input}
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.icons}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="mail-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="notifications-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    safeArea: {
      backgroundColor: '#fff',
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 12,
      paddingTop: 8,
      //paddingVertical: 8,
    },
    searchInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      paddingHorizontal: 10,
      borderRadius: 20,
      flex: 1,
      height: 40,
    },
    searchIcon: {
      marginRight: 6,
    },
    input: {
      flex: 1,
      fontSize: 18,
      color: '#000',
    },
    icons: {
      flexDirection: 'row',
      marginLeft: 10,
    },
    iconBtn: {
      marginLeft: 10,
    },
  });
  