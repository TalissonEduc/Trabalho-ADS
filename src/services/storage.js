// src/services/storage.js

import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Salva uma lista de encomendas no AsyncStorage.
 * @param {Array} orders - Lista de encomendas.
 */
export const saveOrders = async (orders) => {
  try {
    const jsonValue = JSON.stringify(orders);
    await AsyncStorage.setItem('orders', jsonValue);
  } catch (error) {
    console.error('Erro ao salvar encomendas:', error);
  }
};

/**
 * Carrega a lista de encomendas do AsyncStorage.
 * @returns {Promise<Array>} - Lista de encomendas ou uma lista vazia.
 */
export const loadOrders = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('orders');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Erro ao carregar encomendas:', error);
    return [];
  }
};

/**
 * Adiciona uma nova encomenda e salva no AsyncStorage.
 * @param {Object} newOrder - Nova encomenda a ser adicionada.
 */
export const addOrder = async (newOrder) => {
  try {
    const currentOrders = await loadOrders();
    const updatedOrders = [...currentOrders, newOrder];
    await saveOrders(updatedOrders);
  } catch (error) {
    console.error('Erro ao adicionar encomenda:', error);
  }
};

/**
 * Remove uma encomenda pelo ID e salva no AsyncStorage.
 * @param {string} orderId - ID da encomenda a ser removida.
 */
export const removeOrder = async (orderId) => {
  try {
    const currentOrders = await loadOrders();
    const updatedOrders = currentOrders.filter((order) => order.id !== orderId);
    await saveOrders(updatedOrders);
  } catch (error) {
    console.error('Erro ao remover encomenda:', error);
  }
};
