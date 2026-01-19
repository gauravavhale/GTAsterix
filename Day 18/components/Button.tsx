import { Pressable, Text, StyleSheet } from 'react-native';

type AppButtonProps = {
  title: string;
  onPress: () => void;
};

export default function AppButton({ title, onPress }: AppButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 30,
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
