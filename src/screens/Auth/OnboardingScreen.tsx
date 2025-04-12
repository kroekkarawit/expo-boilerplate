// /src/screens/Auth/OnboardingScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function OnboardingScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Onboarding Screen</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
