// components/AppImage.tsx
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

type AppImageProps = {
  source: { uri: string };
  size?: number;
};

export default function AppImage({ source, size = 250 }: AppImageProps) {
  return (
    <View style={styles.container}>
      <Image source={source} style={[styles.image, { width: size, height: size }]} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  image: { aspectRatio: 1 },
});
