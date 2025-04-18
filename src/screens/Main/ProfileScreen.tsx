import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useAuth } from '../../auth/useAuth';
import useAuthStore from '../../store/useAuthStore';
import ToastManager from 'toastify-react-native';
import { showSuccessToast } from '@/components/toast';
import i18n, { SUPPORTED_LANGUAGES } from '../../i18n';

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const { themeMode, toggleTheme, language, setLanguage } = useAuthStore();
  
  // Optional local state to control Picker value until store hydrates
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  // On mount, keep the picker in sync with the store
  useEffect(() => {
    setSelectedLanguage(language);
  }, [language]);

  const onLanguageChange = (lang: string) => {
    setLanguage(lang);
    showSuccessToast('Language changed', i18n.t('languageSwitched'));
  };

  const onThemePress = () => {
    toggleTheme();
    showSuccessToast('Theme changed', i18n.t('themeSwitched'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('profile')}</Text>

      {user ? (
        <>
          <Text style={styles.info}>{i18n.t('name')}: {user.name}</Text>
          <Text style={styles.info}>{i18n.t('email')}: {user.email}</Text>

          {/* Language Picker */}
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(value) => {
                setSelectedLanguage(value);
                onLanguageChange(value);
              }}
              style={styles.picker}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <Picker.Item
                  key={lang.value}
                  label={lang.label}
                  value={lang.value}
                />
              ))}
            </Picker>
          </View>

          {/* Theme Toggle */}
          <Button title={i18n.t('changeTheme')} onPress={onThemePress} />

          {/* Logout */}
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
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  info: { fontSize: 18, marginBottom: 12 },
  pickerContainer: {
    width: '100%',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  picker: {
    width: '100%',
  },
});
