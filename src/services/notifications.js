// src/services/notifications.js

import PushNotification from 'react-native-push-notification';

/**
 * Configurações iniciais de notificações.
 */
export const configureNotifications = () => {
  PushNotification.configure({
    onNotification: (notification) => {
      console.log('Notificação recebida:', notification);
    },
    requestPermissions: true,
  });

  PushNotification.createChannel(
    {
      channelId: 'order-reminders', 
      channelName: 'Lembretes de Encomendas', 
      importance: 4, 
    },
    (created) => console.log(`Canal de notificação ${created ? 'criado' : 'já existe'}`)
  );
};

/**
 * Agenda uma notificação local.
 * @param {string} id - 
 * @param {string} title - 
 * @param {string} message - 
 * @param {Date} date - 
 */
export const scheduleNotification = (id, title, message, date) => {
  PushNotification.localNotificationSchedule({
    channelId: 'order-reminders', 
    id: id, 
    title: title, 
    message: message, 
    date: date, 
    allowWhileIdle: true, 
  });
};

/**
 * Cancela uma notificação agendada.
 * @param {string} id - 
 */
export const cancelNotification = (id) => {
  PushNotification.cancelLocalNotification(id);
};

/**
 * Cancela todas as notificações agendadas.
 */
export const cancelAllNotifications = () => {
  PushNotification.cancelAllLocalNotifications();
};
