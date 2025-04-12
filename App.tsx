import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { lightTheme, darkTheme } from './src/themes';
import AuthNavigator from './src/navigation/AuthNavigator';
import MainNavigator from './src/navigation/MainNavigator';
import useAuthStore from './src/store/useAuthStore'; // if you still use Zustand for theme, etc.
import { AuthProvider, useAuth } from './src/auth/useAuth';
import ToastManager, { Toast } from 'toastify-react-native'

export default function App() {
  // If you’re managing theme with Zustand, you can continue to do so.
  const { themeMode } = useAuthStore();
  const theme = themeMode === 'dark' ? darkTheme : lightTheme;

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationContainer>
            <AuthOrMainNavigator />
            <ToastManager/>
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

// A small helper component to choose between the navigation stacks.
function AuthOrMainNavigator() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <MainNavigator /> : <AuthNavigator />;
}
