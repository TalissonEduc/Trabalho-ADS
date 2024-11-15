import { AppRegistry, Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';
import App from './App';
import { name as appName } from './app.json';

// Configuração do PushNotification
PushNotification.configure({
  onNotification: function (notification) {
    console.log("Notificação Recebida:", notification);
    // Processamento de qualquer lógica quando a notificação for recebida
    notification.finish(PushNotification.FetchResult.NoData);
  },

  // Configurações específicas do Android
  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios',
});

// Configuração para permitir notificações em segundo plano e cancelar quando necessário
PushNotification.createChannel(
  {
    channelId: "default-channel-id", // Identificador do canal para Android
    channelName: "Canal Padrão", // Nome do canal
    channelDescription: "Canal para notificações de encomendas", // Descrição do canal
    playSound: true,
    soundName: "default",
    importance: 4, // Alta importância para notificações prioritárias
    vibrate: true,
  },
  (created) => console.log(`Canal criado: ${created ? "Sim" : "Não"}`) // Confirmação de criação do canal
);

// Registro do componente principal do aplicativo
AppRegistry.registerComponent(appName, () => App);
