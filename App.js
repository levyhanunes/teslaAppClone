import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem 
              name={'Model X'} 
              tagLine={'Online Order For'}
              tagLineCTA={'Touchless Delivery'}
              image={require('./assets/images/Model3.jpeg')}/>
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
