import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0); 

  
  const increment = () => {
    setCount(count + 1);
  };

 
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contagem Restaurante</Text>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.incrementButton]} onPress={increment}>
          <Text style={styles.buttonText}>Entradas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.decrementButton]} onPress={decrement}>
          <Text style={styles.buttonText}>Saídas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', 
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: '#333',
    marginBottom: 40,
  },
  countText: {
    fontSize: 60,
    fontWeight: '300',
    color: '#333',
    marginBottom: 40,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 30,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5, 
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
  incrementButton: {
    backgroundColor: '#0a3758', 
  },
  decrementButton: {
    backgroundColor: '#5c0a0a', 
  },
});
