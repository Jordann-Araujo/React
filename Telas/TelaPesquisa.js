import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import estilo from '../components/estilo';
import {
  Sansita_400Regular,
  Sansita_700Bold,
  useFonts,
} from '@expo-google-fonts/sansita';

function TelaPesquisa() {
//  const [text, onChangeText] = React.useState("Useless Text");
//  const [number, onChangeNumber] = React.useState(null);
  const fonts = useFonts({
    Sansita_400Regular,
    Sansita_700Bold,
  });

  return (
    <View style={{flex: 1}}>      
      
      <View name='barra Superior' style={estilo.barraSuperior3} >
        <View name='barra de pesquisa' style={estilo.barraPesquisa}> 
        <TextInput
          style={{marginLeft: 5}} placeholder="Pesquise por um divulgador..." />
        <Image source={require('../imagens/lupinha.png')} 
        style={{height:21, width:19, marginRight: 5}}/>
      </View> 
       <Text style={{ fontSize: 24, fontFamily: 'Sansita_400Regular', color: 'whitesmoke' }}>
            
          </Text>  

      </View>
      <View style ={{flexDirection: 'row', justifyContent: 'space-around', flex: 1}}>
        <View style={{justifyContent:'space-around'}}> 
          <View
                style={{
                  height: 100,
                  backgroundColor: '#E17713',
                  width: 130,
                  borderRadius: 0,
                  marginRight: 0,
                  shadowOffset: { width: 5, height: 5 },
                  shadowOpacity: 0.1,
                  shadowRadius: 10,
                  marginTop: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                }}>
                <Text
                style={{
                  fontFamily: 'Sansita_400Regular',
                  marginBottom: 10,
                  marginTop: 35,
                  fontSize: 21,
                  color: 'whitesmoke',
                  textAlign: 'center',
                }}>
                {'VIAJAR'}
              </Text>
                
              
          </View>
          <View
              style={{
                height: 100,
                backgroundColor: '#EE904A',
                width: 130,
                borderRadius: 0,
                marginRight: 0,
                shadowOffset: { width: 5, height: 5 },
                shadowOpacity: 0.1,
                shadowRadius: 20,
                marginTop: 0,
                marginBottom:0,
                marginLeft: 0,
              }}>
              <Text
              style={{
                fontFamily: 'Sansita_400Regular',
                marginBottom: 10,
                marginTop: 35,
                fontSize: 21,
                color: 'whitesmoke',
                textAlign: 'center',
              }}>
              {'ANIMAIS'}
            </Text>
              
            
        </View>
        
        <View
              style={{
                height: 100,
                backgroundColor: '#E17713',
                width: 130,
                borderRadius: 0,
                marginRight: 0,
                shadowOffset: { width: 5, height: 5},
                shadowOpacity: 0.1,
                shadowRadius: 10,
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 0,
              }}>
              <Text
              style={{
                fontFamily: 'Sansita_400Regular',
                marginBottom: 10,
                marginTop: 35,
                fontSize: 21,
                color: 'whitesmoke',
                textAlign: 'center',
              }}>
              {'MÚSICA '}
            </Text>
          </View>
      </View>
      
      <View style={{justifyContent: 'space-around'}}>
        <View
              style={{
                height: 100,
                backgroundColor: '#E17713',
                width: 130,
                borderRadius: 0,
                marginRight: 0,
                shadowOffset: { width: 5, height: 5},
                shadowOpacity: 0.1,
                shadowRadius: 10,
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 0,
              }}>
              <Text
              style={{
                fontFamily: 'Sansita_400Regular',
                marginBottom: 10,
                marginTop: 35,
                fontSize: 21,
                color: 'whitesmoke',
                textAlign: 'center',
              }}>
              {'MÚSICA '}
            </Text>
          </View>

          <View
              style={{
                height: 100,
                backgroundColor: '#E17713',
                width: 130,
                borderRadius: 0,
                marginRight: 0,
                shadowOffset: { width: 5, height: 5},
                shadowOpacity: 0.1,
                shadowRadius: 10,
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 0,
              }}>
              <Text
              style={{
                fontFamily: 'Sansita_400Regular',
                marginBottom: 10,
                marginTop: 35,
                fontSize: 21,
                color: 'whitesmoke',
                textAlign: 'center',
              }}>
              {'MÚSICA '}
            </Text>
          </View>

          <View
              style={{
                height: 100,
                backgroundColor: '#E17713',
                width: 130,
                borderRadius: 0,
                marginRight: 0,
                shadowOffset: { width: 5, height: 5},
                shadowOpacity: 0.1,
                shadowRadius: 10,
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 0,
              }}>
              <Text
              style={{
                fontFamily: 'Sansita_400Regular',
                marginBottom: 10,
                marginTop: 35,
                fontSize: 21,
                color: 'whitesmoke',
                textAlign: 'center',
              }}>
              {'MÚSICA '}
            </Text>
          </View>
      </View>
      
    
        
        
    
        </View>
    </View>
  );
}

export default TelaPesquisa;