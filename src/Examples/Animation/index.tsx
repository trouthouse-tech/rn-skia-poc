import React from "react";
import { View, StyleSheet } from "react-native";

import { AnimationWithTouchHandler } from "./AnimationWithTouchHandler";

export const AnimationExample: React.FC = () => {
  return (
    <View style={styles.container}>
      <AnimationWithTouchHandler />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingBottom: 80,
  },
});
