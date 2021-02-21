import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <CarsList />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
