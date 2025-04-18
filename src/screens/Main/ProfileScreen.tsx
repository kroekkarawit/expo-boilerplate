// /src/screens/Main/ProfileScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../auth/useAuth';
import useAuthStore from '../../store/useAuthStore';
import ToastManager from 'toastify-react-native';
import { showErrorToast, showSuccessToast } from '@/components/toast';
import i18n from '../../i18n';

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const { toggleTheme } = useAuthStore();
  
  // Local state to force re-render on locale change.
  const [locale, setLocale] = useState(i18n.locale);

  // Handler to toggle language between English and French
  const handleChangeLanguage = () => {
    const newLocale = locale.startsWith('en') ? 'fr' : 'en';
    i18n.locale = newLocale;
    setLocale(newLocale); // trigger a re-render to update texts
    showSuccessToast('Language Changed', i18n.t('languageSwitched'));
  };

  // Handler to toggle the theme using your store's toggleTheme function
  const handleToggleTheme = () => {
    toggleTheme();
    showSuccessToast('Theme Changed', i18n.t('themeSwitched'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('profile')}</Text>
      {user ? (
        <>
          <Text style={styles.info}>{i18n.t('name')}: {user.name}</Text>
          <Text style={styles.info}>{i18n.t('email')}: {user.email}</Text>
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 12 }}>
            <Button title={i18n.t('changeLanguage')} onPress={handleChangeLanguage} />
            <Button title={i18n.t('changeTheme')} onPress={handleToggleTheme} />
          </View>
          
          <Button title={i18n.t('logout')} onPress={logout} />
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
