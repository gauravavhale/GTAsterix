import { Stack } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLogin = async () => {
      const user = await AsyncStorage.getItem('user');
      setIsLoggedIn(!!user);
    };

    checkLogin();
  }, []);

  if (isLoggedIn === null) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!isLoggedIn && <Stack.Screen name="login" />}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
