// src/utils/dateUtils.js

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

/**
 * Formata uma data para um formato legível, ex.: "15 de novembro de 2024".
 * @param {Date|string} date - Objeto de data ou string que pode ser convertida para data.
 * @returns {string} - Data formatada.
 */
export const formatDateToReadable = (date) => {
  try {
    const parsedDate = new Date(date);
    return format(parsedDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  } catch (error) {
    console.error('Erro ao formatar a data:', error);
    return '';
  }
};

/**
 * Formata uma data para o formato usado no calendário, ex.: "2024-11-15".
 * @param {Date|string} date 
 * @returns {string} 
 */
export const formatDateToISO = (date) => {
  try {
    const parsedDate = new Date(date);
    return format(parsedDate, 'yyyy-MM-dd');
  } catch (error) {
    console.error('Erro ao formatar a data para ISO:', error);
    return '';
  }
};

/**
 * Verifica se uma data é futura em relação ao momento atual.
 * @param {Date|string} date  
 * @returns {boolean} 
 */
export const isFutureDate = (date) => {
  try {
    const parsedDate = new Date(date);
    return parsedDate > new Date();
  } catch (error) {
    console.error('Erro ao verificar se a data é futura:', error);
    return false;
  }
};

/**
 * Obtém o número de dias restantes até uma data.
 * @param {Date|string} date 
 * @returns {number} 
 */
export const daysUntilDate = (date) => {
  try {
    const parsedDate = new Date(date);
    const today = new Date();
    const differenceInTime = parsedDate.getTime() - today.getTime();
    return Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
  } catch (error) {
    console.error('Erro ao calcular dias restantes:', error);
    return NaN;
  }
};
