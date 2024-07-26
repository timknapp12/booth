import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

export const NoFeedbackButton = ({ onPress, children }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.noFeedback]}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: '100%',
  },
  noFeedback: {
    backgroundColor: 'transparent',
  },
});
