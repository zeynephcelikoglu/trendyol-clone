import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BottomBar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'home', icon: 'home', label: 'Ana Sayfa' },
    { id: 'favorites', icon: 'heart', label: 'Favoriler' },
    { id: 'cart', icon: 'cart', label: 'Sepet' },
    { id: 'profile', icon: 'person', label: 'Profil' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={styles.tab}
          onPress={() => setActiveTab(tab.id)}
        >
          <Ionicons
            name={activeTab === tab.id ? tab.icon : `${tab.icon}-outline`}
            size={24}
            color={activeTab === tab.id ? '#f2741f' : '#888'}
          />
          <Text style={[styles.label, activeTab === tab.id && styles.activeLabel]}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  activeLabel: {
    color: '#f2741f',
  },
});