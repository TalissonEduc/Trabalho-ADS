// src/components/OrderItem.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OrderItem = ({ order, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(order)} style={styles.container}>
      <View>
        <Text style={styles.name}>{order.name}</Text>
        <Text style={styles.date}>Data de Entrega: {order.date}</Text>
        {order.details ? (
          <Text style={styles.details}>Detalhes: {order.details}</Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  details: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
});
