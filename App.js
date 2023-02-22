import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Press Button to\nShow Favorites');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{outputText}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Favorite Car" onPress={() => setOutputText('1967 Mustang Hardtop')} />
        </View>
        <View style={styles.button}>
          <Button title="Favorite Color" onPress={() => setOutputText('Navy Blue')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    marginBottom: 10,
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});