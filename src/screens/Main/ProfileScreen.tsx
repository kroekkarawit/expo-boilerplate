// /src/screens/Main/ProfileScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../auth/useAuth';
import ToastManager, { Toast } from 'toastify-react-native'

import { showErrorToast, showSuccessToast} from '@/components/toast';
export default function ProfileScreen() {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      {user ? (
        <>
          <Text style={styles.info}>Name: {user.name}</Text>
          <Text style={styles.info}>Email: {user.email}</Text>
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <Button
            title='Show toast'
            onPress={()=> showSuccessToast('Success', 'This is a success message')}
          />

          <Button
            title='Show error toast'
            onPress={() => showErrorToast('Error', 'This is an error message')}
          />
          </View>
          
          <Button title="Logout" onPress={logout} />
        </>
      ) : (
        <Text>No user data available.</Text>
      )}

<ToastManager />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 12,
  },
});
