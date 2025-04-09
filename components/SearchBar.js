import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SearchBar({ showIcons = true, showSearchIcon = true, isMinimal = false}) {
  return (
    <SafeAreaView edges={['top', 'left', 'right']}>
      <View style={[styles.container, isMinimal && styles.minimalContainer]}>
        <View style={[styles.searchInputContainer, isMinimal && styles.minimalInputContainer]}>
          {showSearchIcon && (  
            <Ionicons name="search" size={20} color="#f2741f" style={styles.icon} />
          )}
          <TextInput
            placeholder="Marka, ürün veya kategori ara"
            style={[styles.input, isMinimal && styles.minimalInput]}
            placeholderTextColor="#888"
          />
        </View>

        {showIcons && (  
          <View style={styles.icons}>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="mail-outline" size={24} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="notifications-outline" size={24} color="#333" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 4,
    paddingBottom: 4,
  },
  minimalContainer: {
    paddingHorizontal: 0,
    paddingTop: 0,
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
  minimalInputContainer: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderRadius: 0,
    paddingHorizontal: 0,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 8,
  },
  minimalInput: {
    fontSize: 18,
    paddingVertical: 10,
  },
  icon: {
    marginRight: 6,
  },
  icons: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  iconBtn: {
    marginLeft: 10,
  },
});
  