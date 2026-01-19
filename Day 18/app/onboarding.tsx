import { router } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import AppButton from '@/components/Button';
import AppImage from '../components/AppImage';
import AppText from '@/components/AppText';
import { useRef } from 'react';

export default function Onboarding() {
  const scrollRef = useRef<ScrollView>(null);

  const goNext = (index: number) => {
    scrollRef.current?.scrollTo({
      x: 360 * (index + 1),
      animated: true,
    });
  };

  return (
    <ScrollView
      ref={scrollRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    >
      <Screen
        index={0}
        title="Welcome"
        description="Build mobile apps using React Native"
        imageUri="https://via.placeholder.com/250"
        onNext={goNext}
      />

      <Screen
        index={1}
        title="Learn"
        description="One codebase for Android and iOS"
        imageUri="https://via.placeholder.com/250"
        onNext={goNext}
      />

      <Screen
        index={2}
        title="Get Started"
        description="Start your React Native journey today"
        imageUri="https://via.placeholder.com/250"
        last
      />
    </ScrollView>
  );
}

type ScreenProps = {
  index: number;
  title: string;
  description: string;
  imageUri: string;
  last?: boolean;
  onNext?: (index: number) => void;
};

function Screen({ index, title, description, imageUri, last, onNext }: ScreenProps) {
  return (
    <View style={styles.screen}>
      <AppImage source={{ uri: imageUri }} />

      <AppText variant="title">{title}</AppText>
      <AppText variant="body">{description}</AppText>

      <AppButton
        title={last ? 'Start' : 'Next'}
        onPress={() =>
          last ? router.replace('/(tabs)') : onNext?.(index)
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { width: 360, flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
});
