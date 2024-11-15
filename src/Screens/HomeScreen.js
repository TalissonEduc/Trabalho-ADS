import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  const [orders, setOrders] = React.useState([]);

  const fetchOrders = async () => {
    const storedOrders = await AsyncStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchOrders();
    }, [])
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="Adicionar Encomenda" onPress={() => navigation.navigate('AddOrder')} />
      <Button title="Visualizar Calendário" onPress={() => navigation.navigate('Calendar')} />
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text>{item.date} - {item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
