import React, { useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CalendarScreen = () => {
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    const fetchMarkedDates = async () => {
      const storedOrders = await AsyncStorage.getItem('orders');
      if (storedOrders) {
        const orders = JSON.parse(storedOrders);
        const newMarkedDates = {};
        orders.forEach(order => {
          newMarkedDates[order.date] = { marked: true, dotColor: 'blue' };
        });
        setMarkedDates(newMarkedDates);
      }
    };

    fetchMarkedDates();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Calendar
        markedDates={markedDates}
        onDayPress={(day) => {
          if (markedDates[day.dateString]) {
            Alert.alert("Encomenda", `Encomenda para o dia ${day.dateString}`);
          }
        }}
      />
    </View>
  );
};

export default CalendarScreen;
