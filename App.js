import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

export default function App() {
  const [gasolina, setGasolina] = useState('');
  const [alcool, setAlcool] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    if (!gasolina || !alcool) {
      Alert.alert('Atenção', 'Preencha os dois preços!');
      return;
    }

    const precoGasolina = parseFloat(gasolina.replace(',', '.'));
    const precoAlcool = parseFloat(alcool.replace(',', '.'));

    if (isNaN(precoGasolina) || isNaN(precoAlcool)) {
      Alert.alert('Erro', 'Digite números válidos');
      return;
    }

    const compensa = (precoAlcool / precoGasolina) < 0.7 ? 'ÁLCOOL' : 'GASOLINA';
    setResultado(`Melhor opção: ${compensa}`);
  };

  return (
    <View style={styles.container}>
      {}
      <Image 
        source={require('./assets/Bomba.png')} 
        style={styles.imagem}
      />

      <Text style={styles.titulo}>Qual vale mais a pena?</Text>

      {}
      <Text style={styles.subtitulo}>Álcool (preço por litro):</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor do álcool"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={alcool}
        onChangeText={setAlcool}
      />

      {}
      <Text style={styles.subtitulo}>Gasolina (preço por litro):</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor da gasolina"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={gasolina}
        onChangeText={setGasolina}
      />

      {}
      <TouchableOpacity 
        style={styles.botao} 
        onPress={calcular}
      >
        <Text style={styles.textoBotao}>CALCULAR</Text>
      </TouchableOpacity>

      {}
      {resultado && (
        <Text style={styles.resultado}>{resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  imagem: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  titulo: {
    color: '#FFD700', 
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  subtitulo: {
    color: '#FFF', 
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 5,
  },
  input: {
    backgroundColor: '#333', 
    color: '#FFF', 
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  botao: {
    backgroundColor: '#FFD700', 
    borderRadius: 8,
    paddingHorizontal: 20, 
    paddingVertical: 12,
    alignSelf: 'center', 
  },
  textoBotao: {
    color: '#000', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 20,
    color: '#FFD700', 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


