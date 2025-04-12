// /src/screens/Auth/ForgotPasswordScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ForgotPasswordScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Forgot Password Screen</Text>
      <Button title="Go back to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
