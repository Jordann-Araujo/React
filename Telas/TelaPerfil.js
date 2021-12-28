import React, { useState } from 'react';
import { AppLoading } from 'expo-app-loading';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import estilo from '../components/estilo';
import usuario from '../dados/usuario_';
import {
  Sansita_400Regular,
  Sansita_700Bold,
  useFonts,
} from '@expo-google-fonts/sansita';

const titulo = StyleSheet.create({
  titulo: { 
    fontFamily: 'Sansita_400Regular',
    fontSize: 21,
  }})

function nomeSobrenome(nome) {
  let espaco = 0;
  let idx;
  let nomeNovo = '';

  for (let i in nome) {
    if (nome[i] != ' ' && espaco < 2) {
      nomeNovo = nomeNovo + nome[i];
    }
    if (nome[i] == ' ') {
      espaco++;
      nomeNovo = nomeNovo + nome[i];
    }
  }
  return nomeNovo.trim();
}

function TelaPerfil({ navigation }) {
  const fonts = useFonts({
    Sansita_400Regular,
    Sansita_700Bold,
  });

  return (
    <ScrollView style={{ flex: 1 }}>
      <View name="Barra Superior" style={estilo.barraSuperior2}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Image
            source={require('../imagens/perfil/Foto.png')}
            style={{ height: 72, width: 69 }}
          />

          <View style={{ justifyContent: 'center' }}>
            <Text
              style={{
                fontFamily: 'Sansita_400Regular',
                fontSize: 21,
                textShadowColor: '#085760',
                textShadowRadius: 10,
                textShadowOffset: { height: 2, width: 0 },
              }}>
              {usuario[0].nome}
            </Text>
            <Text
              style={{
                fontFamily: 'Sansita_400Regular',
                fontSize: 16,
                textShadowColor: '#085760',
                textShadowRadius: 10,
                textShadowOffset: { height: 2, width: 0 },
              }}>
              {usuario[0].conta_usuario}
            </Text>
          </View>

          <Image
            source={require('../imagens/perfil/Engrenagem.png')}
            style={{ height: 30, width: 30 }}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <View
            name="linha"
            style={{
              height: 1,
              width: 330,
              backgroundColor: 'whitesmoke',
              marginTop: 9,
              marginBottom: 9,
            }}
          />
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Sansita_400Regular',
              color: 'whitesmoke',
            }}>
            EMPREENDEDOR
          </Text>
        </View>
      </View>

      <View name="Descricao">
        <Text
          style={
            titulo.titulo
          }>
          Quem é {nomeSobrenome(usuario[0].nome)}?
        </Text>

        <View
          style={{
            borderWidth: 2,
            borderRadius: 20,
            borderColor: '#0E0F42',
            height: 90,
            margin: 15,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              color: '#463C3C',
              textAlign: 'auto',
              fontFamily: 'Sansita_400Regular',
            }}>
            {usuario[0].descricao}
          </Text>
        </View>
      </View>

      <View name="Avaliacao" style={{}}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 50,
              }}>
              <Image
                name="estrela"
                source={require('../imagens/perfil/estrela-P.png')}
                style={{ margin: 5 }}
              />
              <Image
                name="estrela"
                source={require('../imagens/perfil/estrela-P.png')}
                style={{ margin: 5 }}
              />
              <Image
                name="estrela"
                source={require('../imagens/perfil/estrela-P.png')}
                style={{ margin: 5 }}
              />
              <Image
                name="estrela"
                source={require('../imagens/perfil/estrela-P.png')}
                style={{ margin: 5 }}
              />
              <Image
                name="estrela"
                source={require('../imagens/perfil/estrela-v.png')}
                style={{ margin: 5 }}
              />
            </View>
          </TouchableOpacity>

          <View
            style={{
              alignItems: 'flex-end',
              marginRight: 30,
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Image source={require('../imagens/perfil/seta.png')} />
          </View>
        </View>

        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Sansita_400Regular',
            color: '#908A8A',
          }}>
          {'Veja o que os divulgadores estão dizendo...'}
        </Text>
      </View>

      <View
        name="Redes sociais"
        style={{ alignItems: 'center', marginTop: 18 }}>
        <Text
          style={{
            fontFamily: 'Sansita_400Regular',
            marginBottom: 10,
            fontSize: 21,
          }}>
          {'Redes Sociais'}
        </Text>

        <View
          style={{
            height: 80,
            backgroundColor: '#EAEAEA',
            width: 300,
            borderRadius: 20,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 10,
            }}>
            <View style={{ justifyContent: 'space-around' }}>
              <Text style={{ fontFamily: 'Sansita_400Regular' }}>
                {usuario[0].conta_usuario}
              </Text>
              <Text style={{ fontFamily: 'Sansita_400Regular' }}>
                {usuario[0].conta_usuario}
              </Text>
            </View>

            <View style={{ justifyContent: 'space-around' }}>
              <Text
                style={{
                  fontFamily: 'Sansita_400Regular'
                }}>
                {usuario[0].conta_usuario}
              </Text>
              <Text
                style={{
                  fontFamily: 'Sansita_400Regular'
                }}>
                {usuario[0].conta_usuario}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default TelaPerfil;
