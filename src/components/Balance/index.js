import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Balance() {
  return (
    <View style={styles.container}>
      <Text>Balance</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
