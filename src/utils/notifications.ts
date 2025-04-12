import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

// Request permission and get the push token
export async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    alert('Failed to get push token for notifications!');
    return;
  }
  const tokenData = await Notifications.getExpoPushTokenAsync();
  console.log(tokenData);
  return tokenData.data;
}
