import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

    <TouchableOpacity style={styles.actionButton}>
      
    </TouchableOpacity>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {}
})