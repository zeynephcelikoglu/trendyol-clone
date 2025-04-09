import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import BottomBar from '../components/BottomBar';
import { AuthContext } from '../store/auth-context';

export default function ProfileScreen() {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Profil</Text>

        <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
          <Text style={styles.logoutText}>Çıkış Yap</Text>
        </TouchableOpacity>
      </View>

      <BottomBar activeTab="profile" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    marginTop:50
  },
  logoutBtn: {
    marginTop: 20,
    paddingVertical: 12,
    backgroundColor: '#f2741f',
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

