import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity is 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Target opacity is 1
      duration: 2000, // Duration of the animation in milliseconds
      useNativeDriver: true, // Optimize animation performance
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
        Welcome to the Animated App!Hello
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    padding: 20,
    backgroundColor: "orange",
    color: "#fff",
    borderRadius: 10,
    textAlign: "center",
  },
});
