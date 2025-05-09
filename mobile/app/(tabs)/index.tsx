import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-100">
      <Text className="text-2xl font-bold text-blue-700 mb-4">Hello, NativeWind & Paper!</Text>
      <Button mode="contained" onPress={() => {}} style={{ marginTop: 16 }}>
        Press me
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
