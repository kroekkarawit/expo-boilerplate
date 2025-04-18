import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import api from '../../api/axiosInstance';
import { useAuth } from '../../auth/useAuth';
import ToastManager, { Toast } from 'toastify-react-native'

const loginSchema = z.object({
  email: z.string().nonempty('Email is required').email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginScreen({ navigation }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuth();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await api.post('/api/user/login', data);
      const { token, user } = response.data;

      const loggedInUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        isPremium: user.isPremium || false,
        token: token,
      };

      await login(loggedInUser);

      // ✅ Show success toast
      Toast.success('success', 'top')

    } catch (error: any) {
      console.error('Login failed:', error);

      Toast.error('Login Failed', 'top')

    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Controller
        control={control}
        name="email"
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Enter your email"
            />
            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
              placeholder="Enter your password"
            />
            {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
          </>
        )}
      />

      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 12,
    borderRadius: 4,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});
