import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification from 'react-native-push-notification';
import { useNavigation } from '@react-navigation/native';

const AddOrderScreen = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');
  const navigation = useNavigation();

  const scheduleNotification = (date, orderName) => {
    const notificationDate = new Date(date);
    notificationDate.setDate(notificationDate.getDate() - 1); 

    PushNotification.localNotificationSchedule({
      message: `Lembrete: Encomenda de ${orderName} para amanhã!`,
      date: notificationDate,
      allowWhileIdle: true,
    });
  };

  const saveOrder = async () => {
    if (!name || !date) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    const newOrder = { id: Date.now().toString(), name, date, details };
    const storedOrders = await AsyncStorage.getItem('orders');
    const orders = storedOrders ? JSON.parse(storedOrders) : [];
    orders.push(newOrder);
    await AsyncStorage.setItem('orders', JSON.stringify(orders));

    scheduleNotification(date, name); 

    Alert.alert("Sucesso", "Encomenda salva e notificação agendada!");
    navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Nome do Cliente</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={{ borderBottomWidth: 1, marginBottom: 16 }}
      />
      <Text>Data de Entrega (YYYY-MM-DD)</Text>
      <TextInput
        value={date}
        onChangeText={setDate}
        style={{ borderBottomWidth: 1, marginBottom: 16 }}
        placeholder="Ex: 2024-12-25"
      />
      <Text>Detalhes do Pedido</Text>
      <TextInput
        value={details}
        onChangeText={setDetails}
        style={{ borderBottomWidth: 1, marginBottom: 16 }}
      />
      <Button title="Salvar Encomenda" onPress={saveOrder} />
    </View>
  );
};

export default AddOrderScreen;
