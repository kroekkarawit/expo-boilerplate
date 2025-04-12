// toast.tsx
import { Toast } from 'toastify-react-native';

export const showSuccessToast = (title: string, message?: string) => {
    Toast.show({
      type: 'success',
      text1: title || "Success",
      text2: message || "",
      position: 'top',
      visibilityTime: 5000,
      autoHide: true,
      backgroundColor: '#4CAF50',
      textColor: '#fff',
      iconColor: '#fff',
      iconSize: 24,
      progressBarColor: '#7ade7e',
      theme: 'dark',
    });
};

export const showErrorToast = (title?: string, message?: string) => {
  Toast.show({
    type: 'error',
    text1: title || 'Error',
    text2: message || '',
    position: 'top',
    visibilityTime: 5000,
    autoHide: true,
    backgroundColor: '#F44336',       // Red
    textColor: '#fff',
    iconColor: '#fff',
    iconSize: 24,
    progressBarColor: '#ff9e9e',
    theme: 'dark',
  });
};

export const showInfoToast = (title?: string, message?: string) => {
  Toast.show({
    type: 'info',
    text1: title || 'Info',
    text2: message || '',
    position: 'top',
    visibilityTime: 5000,
    autoHide: true,
    backgroundColor: '#2196F3',       // Blue
    textColor: '#fff',
    iconColor: '#fff',
    iconSize: 24,
    progressBarColor: '#90caf9',
    theme: 'dark',
  });
};
