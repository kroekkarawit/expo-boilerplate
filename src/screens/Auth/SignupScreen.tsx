// /src/screens/Auth/SignupScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SignupScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Signup Screen</Text>
      <Button title="Go to Forgot Password" onPress={() => navigation.navigate('ForgotPassword')} />
    </View>
  );
}
