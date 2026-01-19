// components/AppText.tsx
import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

type AppTextProps = TextProps & {
  children: string;
  variant?: 'title' | 'subtitle' | 'body';
};

export default function AppText({ children, variant = 'body', style, ...props }: AppTextProps) {
  return <Text style={[styles[variant], style]} {...props}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 20, fontWeight: '600', textAlign: 'center', marginBottom: 6 },
  body: { fontSize: 16, textAlign: 'center', color: '#555' },
});
