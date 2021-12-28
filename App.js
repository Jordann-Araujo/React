import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaInicial from './Telas/TelaInicial';
import TelaPerfil from './Telas/TelaPerfil';
import TelaPesquisa from './Telas/TelaPesquisa';
import TelaChat from './Telas/TelaChat';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          activeBackgroundColor: ''
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName; let wi; let he

            if (route.name === 'Tela inicial') {
              iconName = focused 
              ? require('./imagens/barra-inferior-preenchida/home-P.png')  
              : require('./imagens/barra-inferior-vasada/home-V.png')
              wi = 30; he = 30
            } else if (route.name === 'Perfil') {
              iconName = focused 
              ? require('./imagens/barra-inferior-preenchida/perfil-P.png')  
              : require('./imagens/barra-inferior-vasada/perfil-V.png')
              wi = 30; he = 30
            } else if (route.name === 'Chat') {
              iconName = focused 
              ? require('./imagens/barra-inferior-preenchida/chat-P.png')  
              : require('./imagens/barra-inferior-vasada/chat-V.png')
              wi = 40; he = 30
            } else if (route.name === 'Pesquisa') {
              iconName = focused 
              ? require('./imagens/barra-inferior-preenchida/pesquisa-P.png')  
              : require('./imagens/barra-inferior-vasada/pesquisa-V.png')
              wi = 40; he = 30
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={{width: wi, height: he}} />;
          }
        })}
      >
      
        <Tab.Screen name="Tela inicial" 
        component={TelaPesquisa} 
        options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Pesquisa" 
          component={TelaInicial} 
           options={{ headerShown: false }}
        />
        <Tab.Screen name="Chat" component={TelaChat} />
         <Tab.Screen name="Perfil" 
        component={TelaPerfil}
        options={{ headerShown: false }} />
        
    </Tab.Navigator>
    </NavigationContainer>
  );
}
