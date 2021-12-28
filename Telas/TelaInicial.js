import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import estilo from '../components/estilo';

function TelaInicial() {
//  const [text, onChangeText] = React.useState("Useless Text");
//  const [number, onChangeNumber] = React.useState(null);
  
  return (
    <View style={{flex: 1}}>      
      
      <View name='barra Superior' style={estilo.barraSuperior} >
        <View style={{flexDirection: "row", justifyContent: 'space-around', alignItems: 'center'}}>
          <Image source={require('../imagens/logo-JJK.png')}/>
          <View>
            <Text style={{fontWeight: 'bold'}}> José Lucas de Araújo </Text>
            <Text style={{fontWeight: 'bold'}}> lukinha.078 </Text>
          </View>
          <Image source={require('../imagens/sininho.png')} 
          style={{height:40, width:40}}/>
        </View>      
      </View>

      <View name='barra de pesquisa' style={estilo.barraPesquisa}> 
        <TextInput
          //onTextInput={() => {lupa = null}}// lupa = require('../imagens/logo-JJK.png')}
          style={{marginLeft: 5}} placeholder="Pesquise por um divulgador..." />
        <Image source={require('../imagens/lupinha.png')} 
        style={{height:21, width:19, marginRight: 5}}/>
      </View>
      
    </View>
  );
}

export default TelaInicial;
