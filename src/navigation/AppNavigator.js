// src/navigation/AppNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Importando as telas
import HomeScreen from '../screens/HomeScreen';
import AddOrderScreen from '../screens/AddOrderScreen';
import CalendarScreen from '../screens/CalendarScreen';

// Criando o Stack Navigator
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6200EE', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* Tela inicial com lista de encomendas */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Encomendas' }}
        />

        {/* Tela para adicionar nova encomenda */}
        <Stack.Screen
          name="AddOrder"
          component={AddOrderScreen}
          options={{ title: 'Nova Encomenda' }}
        />

        {/* Tela do calendário */}
        <Stack.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{ title: 'Calendário' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
