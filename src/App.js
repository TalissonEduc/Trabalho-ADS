import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import AddOrderScreen from './src/screens/AddOrderScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Encomendas' }} />
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{ title: 'Calendário' }} />
        <Stack.Screen name="AddOrder" component={AddOrderScreen} options={{ title: 'Adicionar Encomenda' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
