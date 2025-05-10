import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { PaperProvider } from 'react-native-paper';
import "nativewind/tailwind.css";
import AppNavigator from '../navigation';
// import i18next setup here (to be implemented)
// import Supabase client setup here (to be implemented)

import { useColorScheme } from '@/hooks/useColorScheme';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <PaperProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
      <AppNavigator />
      {children}
    </PaperProvider>
  );
}
